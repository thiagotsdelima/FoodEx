import { Container } from './styles';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TextArea } from '../../components/TextArea';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { ButtonBack } from '../../components/ButtonBack';
import { Button } from '../../components/Button';
import { FiLogOut } from "react-icons/fi";

export function AddMeal() {
  const [mealDescription, setMealDescription] = useState('Your meal description here.');
return (
<Container>
  <Header />
    <main>
    <ButtonBack />
    <Section title='Adicionar prato' />

    <form id="newDish" action="#" method="post" className="dishes">
    <div className="formImage">
    <label htmlFor="image" >
      <p id="imageInput">Imagem do Prato</p>
        <p className="upload">
           <FiLogOut className="formIcon"/>
            <p className="uploadText ">Selecione imagem</p>
            <Input type="file" id="image" name="image" accept="image/*" onChange={(event)=>setDishImage(event.target.files[0])} />
              </p>                   
          </label>
     </div>

    <div className="formInputs">
      <label htmlFor="name">Nome</label>
        <Input type="text" id="name" name="name" placeholder="Ex: Salada Ceasar" required onChange={(event)=>setName(event.target.value)}/>
    </div>

    <div className="formInputs">
        <label htmlFor="category">Categoria</label>
         <div className="customSelect">
         <select id="DrinkEatCategory" name="DrinkEatCategory" placeholder="Refeição" required onChange={(event)=>setCategory(event.target.value)}>
          <option value="" disabled selected hidden>Selecione uma categoria</option>
          <option value="refeicao">Refeição</option>
          <option value="sobremesa">Sobremesa</option>
          <option value="bebida">Bebida</option>
        </select>
        </div>
        </div>

        <div className="formInputs">
        <label htmlFor="ingredients" id="seasoningLabel">
        Ingredientes
        <TextArea $interactive={false} readOnly={true} value={mealDescription}>
        <Tag className="tag" />                
        <Tag className="tag" $isNew placeholder="Adicionar" required />                
        </TextArea>  
        </label>
        {/* <input type="button" onClick="addTag()">Add</input> */}
        </div>
    <Button />
    <Input />
    <Input />
    
   
   
    <Input />
    
   
    <TextArea $interactive={true} />
    </form>
    <Button />
   
   
    </main>
  <Footer />
</Container>
);
}