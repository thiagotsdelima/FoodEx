import { Container } from './styles';
import Polygon2Png from '../../../public/Polygon2.png';
export function Footer() {
return (
<Container>
<div id="logo">
        <img
            src={ Polygon2Png }
            alt="image Logo."
          />
        <p>food explorer</p>
      </div>
<footer class="container">
            <p>
            © 2023 - Todos os direitos reservados.
            </p>
        </footer>
</Container>
);
}