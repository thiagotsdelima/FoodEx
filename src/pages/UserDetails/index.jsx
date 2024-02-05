import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ButtonBack } from '../../components/ButtonBack';
import { Meals } from '../../components/Meals';
import { Seasoning } from '../../components/Seasoning';

export function UserDetails() {
return (
  <Container>
  <Header />
  <ButtonBack />
  <Meals />
  <Seasoning id="wrapperTag" />

  
  <Footer />
  </Container>
)

}