import { Container, Content, Main, Form, ButtonBackWrapper } from './styles';
import { React } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/footer';
import { Input } from '../../components/input';
import { Section } from '../../components/Section';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { ButtonBack } from '../../components/ButtonBack';
import { FaChevronDown } from 'react-icons/fa';
import {api} from '../../services/api';
import { FiLogOut } from "react-icons/fi";

export function EditMeal() {
  const [placeholderText, setPlaceholderText] = useState('Ex.: Salada Ceasar');
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [seasonings, setSeasonings] = useState([]);
  const [newSeasoning, setNewSeasoning] = useState('');
  const [photoFoodFile, setPhotoFoodFile] = useState(null);
  const [photoFood, setPhotoFood] = useState(null);
  

  const navigate = useNavigate();
  const { id } = useParams();

  function handleAddPhotoFood(event) {
    const file = event.target.files[0]

    if (file && file.type.startsWith('image/')) {
      setPhotoFoodFile(file)
     
      const photoFoodPreview = URL.createObjectURL(file)
      setPhotoFood(photoFoodPreview)
    }
  }

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await api.get(`/meals/${id}`, { withCredentials: true });
        const { name, category, price, description, seasonings, photo } = response.data;
        setName(name);
        setCategory(category);
        setPrice(price);
        setDescription(description);
        if (typeof seasonings === 'string') {
          setSeasonings(seasonings.split(',').map(name => ({ name })));
        } else if (Array.isArray(seasonings)) {
          setSeasonings(seasonings.map(seasoning => ({ name: seasoning.name })));
        } else {
          console.error('Unexpected type for seasonings:', typeof seasonings);
        }
        setPhotoFood(photo);
      } catch (error) {
        console.error("Erro ao carregar o prato:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setPlaceholderText('Salada Ceasar');
      } else {
        setPlaceholderText('Ex.: Salada Ceasar');
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const handleUpdateDish = async (event) => {
    event.preventDefault();
  
    const errorMessage = validateForm();
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    const numericPrice = Number(price.replace(/[^\d.-]/g, ''));
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category_name", category);
    formData.append("price", numericPrice);
    formData.append("description", description);
    const seasoningsString = seasonings.map(seasoning => seasoning.name).join(',');
    formData.append("seasoning", seasoningsString);
    if (photoFoodFile) {
      formData.append('photo_food', photoFoodFile)
    }
    
  
 
    try {
      setIsLoading(true);
      const response = await api.put(`/meals/${id}`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert("Prato atualizado com sucesso: " + response.data.message);
      navigate('/');
    } catch (error) {
      console.error("Erro ao atualizar o prato:", error);
      alert("Erro ao atualizar o prato: " + (error.response ? error.response.data.message : error.message));
    } finally {
      setIsLoading(false);
    }
  };
  
  function validateForm() {
    if (!name) return "Nome do prato é obrigatório.";
    if (!category) return "Categoria do prato é obrigatória.";
    if (!price) return "Preço do prato é obrigatório.";
    if (!description) return "Descrição do prato é obrigatória.";
    return null;
  }

  const handleDeleteMeal = async () => {
    const isConfirmed = window.confirm("Tem certeza que deseja excluir este prato?");
    if (!isConfirmed) {
      return;
    }
    try {
      setIsLoading(true);
      const response = await api.delete(`/meals/${id}`, { withCredentials: true });
      alert("Prato excluído com sucesso: " + response.data.message);
      navigate('/');
    } catch (error) {
      console.error("Erro ao excluir o prato:", error);
      alert("Erro ao excluir o prato: " + (error.response ? error.response.data.message : error.message));
    } finally {
      setIsLoading(false);
    }
  };  

  function handleAddSeasoning() {
    if (newSeasoning.trim() !== "") {
      setSeasonings(prev => [...prev, { name: newSeasoning }]);
      setNewSeasoning("");
    }
  }

  function handleRemoveSeasoning(toRemove) {
    setSeasonings(prev => prev.filter(seasoning => seasoning !== toRemove));
  }

return (
<Container>
  <Header />
  {isLoading ? (
      <p>Carregando...</p>
    ) : (
      <Content>
    <Main>
            <ButtonBackWrapper>
                <ButtonBack  customStyle={{ fontSize: "1.1rem" }} />
            </ButtonBackWrapper>
    <Section title='Editar prato' />
    <Form id="newDish" action="#" method="post" className="dishes">
    <div className="formRow">
          <div className="formImageUpload">
          <div className="imageInputLabel">Imagem do Prato</div> 
            <div className="upload"> 
              <FiLogOut className="formIcon"/>
              <label htmlFor="image" className="uploadLabel">Selecione imagem</label>
              <label htmlFor="image" className="uploadTextLabel">Selecione imagem para alterá-la</label>
              <Input 
              type="file" 
              id="image" 
              name="image" 
              accept="image/*" 
              onChange={handleAddPhotoFood} 
            />
            </div>
    </div>

    <div className="formInputs">
      <label htmlFor="name">Nome</label>
      <Input className="inputName" type="text" id="name" name="name" placeholder={placeholderText} required onChange={(event)=>setName(event.target.value)}/>
    </div>

    <div className="formInputs">
  <label htmlFor="DrinkEatCategory">Categoria</label>
  <div className="customSelect">
  <select
      id="DrinkEatCategory"
      name="category_id"
      required
      value={category}
      onChange={(event) => setCategory(event.target.value)}
  >
      <option value="" disabled hidden>Selecione uma categoria</option>
      <option value="Refeição">Refeição</option>
      <option value="Sobremesa">Sobremesa</option>
      <option value="Bebida">Bebida</option>
    </select>
    <FaChevronDown className="selectIcon" />
  </div>
</div>
</div>
        
<div className="formRowTag">
  <div className="formInputs">
  <div className="ingredientsLabel">Ingredientes</div>
    <fieldset id="tagBackground">
      {seasonings.map((seasoning, index) => (
        <Tag
          className="tagStyle"
          key={index}
          value={seasoning.name}
          onClick={() => handleRemoveSeasoning(seasoning)}
        />
      ))}
      <Tag
        $isNew
        placeholder="Adicionar"
        value={newSeasoning}
        onChange={(e) => setNewSeasoning(e.target.value)}
        onClick={handleAddSeasoning}
        onKeyDown={(e) => e.key === 'Enter' ? handleAddSeasoning() : null}
      />
    </fieldset>
  </div>
        
        

        
    <div className="formInputs">
      <label className="priceLabel" htmlFor="price">Preço</label>
      <Input className="inputPrice" type="text" id="price" name="price" placeholder="R$ 00,00" required onChange={(event)=>setPrice(event.target.value)}/>
    </div>
  </div>
              
  <div className="formInputs">
                <label className="descriptionLabel" htmlFor="description">Descrição</label>
                <TextArea id="description" name="description" readOnly={false} placeholder="A Salada César é uma opção refrescante para o verão." rows="8" required onChange={(event)=>setDescription(event.target.value)} ></TextArea>
              </div>
              
           
             
    </Form>
    <div className="wrapperButton">
      <Button
        className="submitButtonBlack"
        id="black-btn"
        onClick={handleDeleteMeal}
        disabled={isLoading} 
        title="Excluir prato"
      />
      
      <Button
        type="submit" 
        className="submitButton"
        form="newDish" 
        onClick={handleUpdateDish}
        disabled={isLoading}
        title="Salvar alterações"
      />
    </div>

    </Main>
    <Footer />
  </Content>
  )}
</Container>
)
};

