import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MealsDish } from '../../components/MealsDish';

export function AdminMealOrder() {
return (
<Container>
  <Header />
  <main>
    <h2>pedido</h2>
  <MealsDish />
  </main>
  <Footer />
</Container>
);
}