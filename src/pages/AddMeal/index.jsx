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
 const { isLoading, setIsLoading } = useAuth();
 const [photo_food, setPhoto_food] = useState(null); 
 const [name, setName] = useState(""); 
 const [category, setCategory] = useState("Refeições"); 
 const [price, setPrice] = useState(0); 
 const [mealDescription, setMealDescription] = useState('Your meal description here.');
 const [ Seasoning, setSeasoning ] = useState([]); 
 const [ newSeasoning, setNewSeasoning ] = useState(""); 

  const navigate = useNavigate();
  
  const handleCreateDish = async (event) => {
    event.preventDefault(); 

    const errorMessage = validateForm();
    if (errorMessage) {
      return toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT
      });
    }


  function validateForm() {
    if (!name) return "Precisa inserir um nome. Por favor, informe o nome do Prato.";
    if (!category) return "Precisa inserir uma categoria. Por favor, informe a categoria do Prato.";
    if (!price) return "Precisa inserir um valor de custo. Por favor, informe o preço do Prato.";
    if (!mealDescription) return "Precisa inserir uma descrição. Por favor, informe a descrição do Prato.";
    if (newSeasoning) return "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.";
    return null;
}

const formData = new FormData();

formData.append("name", name);
formData.append("category", category);
formData.append("price", price.toString());
formData.append("seasoning", Seasoning.join(','));
formData.append("mealDescription", mealDescription);
formData.append("photo_food", photo_food);

try {
  setIsLoading(true);
  await api.post("/meals", formData);
  setIsLoading(false);
  console.log("Prato criado com sucesso.");
  navigate(-1); 
} catch (error) {
  setIsLoading(false);
  console.error("Não foi possível criar o prato."); 
}
};

  function handleAddSeasoning() {
    setSeasoning(prevState => [...prevState, newSeasoning]); 
    setNewSeasoning("");
  }

  function handleRemoveSeasoning(deleted) { 
    setSeasoning(prevState => prevState.filter(seasoning => seasoning !== deleted)); 
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
              <span className="uploadText">Selecione imagem</span>
              <Input type="file" id="image" name="image" accept="image/*" onChange={(event)=>setDishImage(event.target.files[0])} />
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
          value={category} // Usa o estado aqui
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
            form="newDishForm"
            onClick={handleCreateDish}
            title="Salvar Informações"
            
          /> 
         
    </Main>
  <Footer />
  </Content>
</Container>
);
}
