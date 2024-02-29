import { Container, Content, Main, Form } from './styles';
import { React } from 'react';
import { useState } from 'react';
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
  const [mealDescription, setMealDescription] = useState('Your meal description here.');
  const [category, setCategory] = useState('');
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
                <TextArea id="description" name="description" readOnly={false} placeholder="A Salada César é uma opção refrescante para o verão." rows="8" required onChange={(event)=>setDescription(event.target.value)} ></TextArea>
              </div>
              
           
             
    </Form>
    <div className="wrapperButton">
      <Button
        className="submitButtonBlack"
        id="black-btn"
        title="Excluir prato"
      />
      
      <Button
        type="submit" 
        className="submitButton"
        form="newDishForm"
        title="Salvar alterações"
      />
    </div>

    </Main>
  <Footer />
  </Content>
</Container>
);
}

