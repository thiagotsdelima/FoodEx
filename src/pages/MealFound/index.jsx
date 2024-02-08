import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Preparation } from '../../components/Preparation';
import { Section } from '../../components/Section';
import { MealsDish } from '../../components/MealsDish';

export function MealFound() {
return (
<Container>
<Header />
<main>
<Section title="Histórico de pedidos" />
<Preparation />
<MealsDish />
</main>
<Footer />
</Container>
);
}