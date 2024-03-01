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
  const { id: mealId } = useParams();

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await api.put(`/meals/${mealId}`);
        const { name, category, price, description, seasonings, photo } = response.data;
        setName(name);
        setCategory(category);
        setPrice(price);
        setDescription(description);
        setSeasonings(seasonings.split(','));
        setPhotoFood(photo);
      } catch (error) {
        console.error("Erro ao carregar o prato:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeal();
  }, [mealId]);

  const handleUpdateDish = async (event) => {
    event.preventDefault();
  
    const errorMessage = validateForm();
    if (errorMessage) {
      alert(errorMessage); 
      return; 
    }
  
    const formData = new FormData(); 
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("seasonings", seasonings.join(','));
    if (photoFood) formData.append("photo_food", photoFood);
    
  
    try {
      setIsLoading(true); 
      const response = await api.delete(`/meals/${mealId}`);
      alert("Prato excluído com sucesso: " + response.data.message); 
      navigate('/'); 
    } catch (error) {
      console.error("Erro ao excluir o prato:", error);
      alert("Erro ao excluir o prato: " + (error.response ? error.response.data.message : error.message));
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
    setWaiting(false)
    const isConfirmed = window.confirm("Tem certeza que deseja excluir este prato?");
    if (!isConfirmed) {
      return;
    }
    try {
      setRedirectToHome(true)

      const response = await api.delete(`/meals/${mealId}`)
      setColor(true)
      setAlertMessage(response.data.message)
      
    } catch (error) {
      setRedirectToHome(false)

      if (error.response) {
        setColor(false)
        setAlertMessage(error.response.data.message)
      } else {
        setColor(false)
        setAlertMessage("Não foi possível excluir o prato")
      }
    }
  }

  function handleAddSeasoning() {
    if (newSeasoning.trim() !== "") {
      setSeasonings(prev => [...prev, newSeasoning]);
      setNewSeasoning("");
    }
  }

  function handleRemoveSeasoning(toRemove) {
    setSeasonings(prev => prev.filter(seasoning => seasoning !== toRemove));
  }

return (
<Container>
  <Header />
  <Content>
    <Main>
   
    <ButtonBack />
    <Section title='Editar prato' />
    <Form id="newDish" action="#" method="post" className="dishes">
    <div className="formRow">
          <div className="formImageUpload">
            <label id="imageInput">Imagem do Prato</label> 
            <div className="upload"> 
              <FiLogOut className="formIcon"/>
              <span className="uploadText">Selecione imagem</span>
              <Input type="file" id="image" name="image" accept="image/*" onChange={(event) => setPhotoFood(event.target.files[0])} />
            </div>
    </div>

    <div className="formInputs">
      <label htmlFor="name">Nome</label>
      <Input className="inputName" type="text" id="name" name="name" placeholder="Ex.: Salada Ceasar" required onChange={(event)=>setName(event.target.value)}/>
    </div>

    <div className="formInputs">
  <label htmlFor="category">Categoria</label>
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
    <label htmlFor="ingredients" id="seasoningLabel">Ingredientes</label>
    <fieldset id="tagBackground">
      {seasonings.map((seasoning, index) => (
        <Tag
          key={index}
          value={seasoning}
          onClick={() => handleRemoveSeasoning(seasoning)}
        />
      ))}
      <Tag
        $isNew
        placeholder="Adicionar"
        value={newSeasoning}
        onChange={(e) => setNewSeasoning(e.target.value)}
        onClick={handleAddSeasoning}
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
        title="Excluir prato"
      />
      
      <Button
        type="submit" 
        className="submitButton"
        form="newDish" 
        onClick={handleUpdateDish}
        title="Salvar alterações"
      />
    </div>

    </Main>
  <Footer />
  </Content>
</Container>
);
}

