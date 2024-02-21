import { Container } from './styles';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TextArea } from '../../components/TextArea';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { ButtonBack } from '../../components/ButtonBack';
import { Button } from '../../components/Button';

export function AddMeal() {
  const [mealDescription, setMealDescription] = useState('Your meal description here.');
return (
<Container>
  <Header />
    <main>
    <div className="header">
    <ButtonBack />
    <Section />
    <Button />
    <Input />
    <Input />
    </div>
    <div className="content">
    <TextArea $interactive={false} readOnly={true} value={mealDescription} />
    <Input />
    </div>
    <div className="footer">
    <TextArea $interactive={true} />
    <Button />
    </div>
    </main>
  <Footer />
</Container>
);
}