import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Seasoning } from '../../components/Seasoning';

export function UserMealSeasoning() {
return (
<Container>
<Header />
<main>
  <h2>Meus favoritos</h2>
<Seasoning />
</main>
<Footer />
</Container>
);
}