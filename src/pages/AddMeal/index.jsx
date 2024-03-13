import React, { useState, useEffect } from 'react';
import { Container, Content, Main, Form, ButtonBackWrapper } from './styles';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/footer';
import { Input } from '../../components/input';
import { Section } from '../../components/Section';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { ButtonBack } from '../../components/ButtonBack';
import { api } from "../../services/api";
import { FaChevronDown } from 'react-icons/fa';

import { FiLogOut } from "react-icons/fi";

export function AddMeal() {
  const [isNotBlankFields, setIsNotBlankFields] = useState(false)
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [photoFoodFile, setPhotoFoodFile] = useState(null);
  const [photoFood, setPhotoFood] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [seasonings, setSeasonings] = useState([{ name: "", isNew: true }]);
  const [newSeasoning, setNewSeasoning] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsScreenSmall(window.innerWidth < 768); 
    };

    checkScreenSize(); 
    window.addEventListener('resize', checkScreenSize); 

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  
  function handleAddPhotoFood(event) {
    const file = event.target.files[0]

    if (file && file.type.startsWith('image/')) {
      setPhotoFoodFile(file)
     
      const photoFoodPreview = URL.createObjectURL(file)
      setPhotoFood(photoFoodPreview)
    }
  }
  

  const handleCreateDish = async (event) => {
    event.preventDefault();
    const seasoningsString = seasonings.map(seasoning => seasoning.name).join(',');
    const formData = new FormData();
    formData.append("category_name", category);
    const errorMessage = validateForm();
    if (errorMessage) {
      alert('Nome do prato é obrigatório')
      console.error(errorMessage);
      return;
    }

    const numericPrice = Number(price.replace(/[^\d.-]/g, ''));
  
    formData.append("name", name);
    formData.append("price", numericPrice);
    formData.append("description", description);
    formData.append("seasoning", seasoningsString); 
    if (photoFoodFile) {
      formData.append('photo_food', photoFoodFile)
    }
  
    try {
      setIsLoading(true);
      const response = await api.post("/meals", formData, { withCredentials: true });
      alert("Prato criado com sucesso.", response.data);
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

  function checkBlankFields() {
    if (
      name &&
      category &&
      seasonings.length > 0 &&
      price &&
      description
    ) {
      setIsNotBlankFields(true)
    } else {
      setIsNotBlankFields(false)
    }
  }
  useEffect(() => {
    checkBlankFields()
  }, [photoFood, name, category, price, description, seasonings])

  function handleAddSeasoning() {
    if (newSeasoning.trim() !== "") {
      setSeasonings(prev => prev.filter(tag => tag.name.trim() !== "").concat({ name: newSeasoning, isNew: false }));
      setNewSeasoning("");
    }
  }
  
  function handleRemoveSeasoning(toRemove) {
    setSeasonings(prev => prev.filter(tag => tag !== toRemove));
    if (seasonings.length <= 1) {
      setSeasonings([{ name: "", isNew: true }]);
    }
  }
  
  

return (
<Container>
  <Header />
  <Content>
    <Main>
            <ButtonBackWrapper>
                <ButtonBack  customStyle={{ fontSize: "1.1rem" }} />
            </ButtonBackWrapper>
            <>
      {isScreenSmall ? (
        <Section title='Novo prato' customStyle={{ display: "none", }} />
      ) : (
        <Section title='Adicionar prato' />
      )}
    </>
    <Form id="newDish" action="#" method="post" className="dishes">
    <div className="formRow">
  <div className="formImageUpload">
    <div className="imageInputLabel">Imagem do Prato</div>
    <div className="upload"> 
      <FiLogOut className="formIcon"/>
      <label htmlFor="image" className="uploadLabel">Selecione imagem</label>
      <Input 
  type="file" 
  id="image" 
  name="image" 
  accept="image/*" 
  onChange={handleAddPhotoFood} // Chama a função modificada
/>

    </div>
  </div>

    <div className="formInputs">
      <label htmlFor="name">Nome</label>
      <Input className="inputName" type="text" id="name" name="name" placeholder="Ex.: Salada Ceasar" required onChange={(event)=>setName(event.target.value)}/>
    </div>

    <div className="formInputs">
  <label htmlFor="category_name">Categoria</label>
  <div className="customSelect">
    <select
      id="category_name"
      name="category_name"
      required
      value={category}
      onChange={(event) => setCategory(event.target.value)}
    >
      <option value="" disabled hidden>Selecione uma categoria</option>
      <option value="refeicoes">Refeição</option>
      <option value="sobremesas">Sobremesa</option>
      <option value="bebidas">Bebida</option>
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
                <TextArea id="description" name="description" readOnly={false} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" rows="8" required onChange={(event)=>setDescription(event.target.value)} ></TextArea>
              </div>
              
           
             
    </Form>
    <Button
            type="submit" 
            className="submitButton"
            form="newDish"
            onClick={handleCreateDish}
            title="Salvar Informações"
            disabled={!isNotBlankFields}
          /> 
         
         </Main>
  <Footer />
  </Content>
</Container>
);
      }
