import { useState } from 'react';
import { Container, Content, Main, Form } from './styles';
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { ButtonBack } from '../../components/ButtonBack';
import { api } from "../../services/api";
import { FaChevronDown } from 'react-icons/fa';

import { FiLogOut } from "react-icons/fi";

export function AddMeal() {
  const [isLoading, setIsLoading] = useState(false);
  const [photoFood, setPhotoFood] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [seasonings, setSeasonings] = useState([]);
  const [newSeasoning, setNewSeasoning] = useState("");
  const navigate = useNavigate();

  const handleCreateDish = async (event) => {
    event.preventDefault();

    const errorMessage = validateForm();
    if (errorMessage) {
      console.error(errorMessage);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category_name", category); 
    formData.append("price", price);
    formData.append("description", description);
    formData.append("seasoning", seasonings.join(' ')); 
    if (photoFood) formData.append("photo_food", photoFood);

    try {
      setIsLoading(true);
      const response = await api.post("/meals", formData);
      console.log("Prato criado com sucesso.", response.data);
      navigate(-1); 
    } catch (error) {
      console.error("Erro ao criar o prato:", error.response ? error.response.data : error.message);
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
    <Section title='Adicionar prato' />
    <Form id="newDish" action="#" method="post" className="dishes">
    <div className="formRow">
          <div className="formImageUpload">
            <label id="imageInput">Imagem do Prato</label> 
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
        <Tag className="tag" />                
        <Tag className="tag" $isNew placeholder="Adicionar" required />                
      </fieldset>              
    </div>
        
        

        
    <div className="formInputs">
      <label htmlFor="price">Preço</label>
      <Input className="inputPrice" type="text" id="price" name="price" placeholder="R$ 00,00" required onChange={(event)=>setPrice(event.target.value)}/>
    </div>
  </div>
              
  <div className="formInputs">
                <label htmlFor="description">Descrição</label>
                <TextArea id="description" name="description" readOnly={false} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" rows="8" required onChange={(event)=>setDescription(event.target.value)} ></TextArea>
              </div>
              
           
             
    </Form>
    <Button
            type="submit" 
            className="submitButton"
            form="newDish"
            onClick={handleCreateDish}
            title="Salvar Informações"
            
          /> 
         
         </Main>
  <Footer />
  </Content>
</Container>
);
}
