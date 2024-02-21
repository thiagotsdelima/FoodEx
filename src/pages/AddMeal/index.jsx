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
    <form id="newDishForm" action="#" method="post" className="dishes">
    <div className="formImage">
    <label htmlFor="image" >
      <p id="imageInput">Imagem do Prato</p>
        <p className="uploadImage">
           <FiLogOut className="uploadIcon"/>
            <p className="uploadText ">Selecione imagem</p>
            <Input type="file" id="image" name="image" accept="image/*" onChange={(event)=>setDishImage(event.target.files[0])} />
              </p>                   
          </label>
     </div>
      
    <Section title='Adicionar prato' />
    <Button />
    <Input />
    <Input />
    
   
    <TextArea $interactive={false} readOnly={true} value={mealDescription} />
    <Input />
    
   
    <TextArea $interactive={true} />
    </form>
    <Button />
   
   
    </main>
  <Footer />
</Container>
);
}