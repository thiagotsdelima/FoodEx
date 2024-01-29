import { Container } from './styles';
import { ButtonIncrement } from '../../../components/ButtonIncrement';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Meals } from '../../../components/Meals';
import { Seasoning } from '../../../components/Seasoning';

export function UserDetails() {
return (
  <Container>
  <Header />
  <Meals />
  <Seasoning id="wrapperTag" title="tomate"/>
  <ButtonIncrement id="wrapperButton" title="Entra"/>
  
  <Footer />
  </Container>
)

}