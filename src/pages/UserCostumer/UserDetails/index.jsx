import { Container } from './styles';
import { Button } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Tag } from '../../../components/Tag';

export function UserDetails() {
return (
  <Container>
  <Header />
  <Tag id="wrapperTag" title="tomate"/>
  <Button id="wrapperButton" title="Entra"/>
  
  <Footer />
  </Container>
)

}