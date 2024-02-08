import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MealsDish } from '../../components/MealsDish';
import { Section } from '../../components/Section';

export function MealOrder() {
return (
<Container>
  <Header />
  <main>
  <Section title="pedido" />
  <MealsDish />
  </main>
  <Footer />
</Container>
);
}