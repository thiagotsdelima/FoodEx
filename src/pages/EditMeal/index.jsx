import { Container, Content, Main, Form } from './styles';
import { React } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { ButtonBack } from '../../components/ButtonBack';
import { FaChevronDown } from 'react-icons/fa';
import {api} from '../../services/api';
import { FiLogOut } from "react-icons/fi";

export function EditMeal() {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [seasonings, setSeasonings] = useState([]);
  const [newSeasoning, setNewSeasoning] = useState('');
  const [photoFood, setPhotoFood] = useState(null);
  

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await api.get(`/meals/${id}`);
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
    if (photoFood) formData.append("photo_food", photoFood);
    
  
 
    try {
      setIsLoading(true);
      const response = await api.put(`/meals/${id}`, formData, {
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
      const response = await api.delete(`/meals/${id}`);
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
   
    <ButtonBack />
    <Section title='Editar prato' />
    <Form id="newDish" action="#" method="post" className="dishes">
    <div className="formRow">
          <div className="formImageUpload">
          <div className="imageInputLabel">Imagem do Prato</div> 
            <div className="upload"> 
              <FiLogOut className="formIcon"/>
              <label htmlFor="image" className="uploadLabel">Selecione imagem</label>
              <Input type="file" id="image" name="image" accept="image/*" onChange={(event) => setPhotoFood(event.target.files[0])} />
            </div>
    </div>

    <div className="formInputs">
      <label htmlFor="name">Nome</label>
      <Input className="inputName" type="text" id="name" name="name" placeholder="Ex.: Salada Ceasar" required onChange={(event)=>setName(event.target.value)}/>
    </div>

    <div className="formInputs">
  <label htmlFor="DrinkEatCategory">Categoria</label>
  <div className="customSelect">
  <select
      id="DrinkEatCategory"
      name="DrinkEatCategory"
      required
      value={category} 
      onChange={(event) => setCategory(event.target.value)} 
    >
      <option value="" disabled hidden>Selecione uma categoria</option>
      <option value="refeicao">Refeição</option>
      <option value="sobremesa">Sobremesa</option>
      <option value="bebida">Bebida</option>
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
      <label htmlFor="price">Preço</label>
      <Input className="inputPrice" type="text" id="price" name="price" placeholder="R$ 00,00" required onChange={(event)=>setPrice(event.target.value)}/>
    </div>
  </div>
              
  <div className="formInputs">
                <label htmlFor="description">Descrição</label>
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
  )};
</Container>
);
}

