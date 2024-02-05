import { Container } from './styles';
import { Header } from '../../components/Header';
import { StatusBy } from '../../components/StatusBy';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';

export function UserEfexHome() {
  
return (
<Container>
<Header />
<main>           
     <StatusBy />
     <Carousel />
</main>
<Footer />
</Container>
);
}