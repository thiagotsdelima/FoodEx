import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Meals } from '../../components/Meals';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';



export function MealOrder() {
return (
<Container>
<Header />
<main>
  <Section title="Meu pedido"/>
  <Meals />
  <Button />
</main>
<Footer />
</Container>
);
}