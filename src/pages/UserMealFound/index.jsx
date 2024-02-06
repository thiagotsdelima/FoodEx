import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Preparation } from '../../components/Preparation';

export function UserMealFound() {
return (
<Container>
<Header />
<main>
  <h2>Histórico de pedidos</h2>
<Preparation />

</main>
<Footer />
</Container>
);
}