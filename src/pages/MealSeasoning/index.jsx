import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Seasoning } from '../../components/Seasoning';
import { Section } from '../../components/Section';

export function MealSeasoning() {
return (
<Container>
<Header />
<main>
<Section title="Meus favoritos" />
<Seasoning />
</main>
<Footer />
</Container>
);
}