import { Container } from './styles';
import { Button } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Seasoning } from '../../../components/Seasoning';

export function UserDetails() {
return (
  <Container>
  <Header />
  <Seasoning id="wrapperTag" title="tomate"/>
  <Button id="wrapperButton" title="Entra"/>
  
  <Footer />
  </Container>
)

}