import { Container, Profile, SearchContainer, MobileIcon, MobileStar } from './styles';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FaSearch } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { PiReceiptThin } from "react-icons/pi";

export function Header({ onChange }) {
  return (
    <Container>
       <MobileIcon>
       <FaBars />
      </MobileIcon>
      <Link to="/">
        <img src="/public/Polygon1.svg" alt="Logo" /> 
        <h1>FoodExplorer</h1>
      </Link>
      <MobileStar>
      <PiReceiptThin />
      </MobileStar>

      <SearchContainer> 
      <FaSearch />
        <Input
          placeholder="Busque por pratos ou ingredientes"
          onChange={onChange}
        />
      </SearchContainer>
      
      <Profile>
        <div>
          <Button title="Pedidos" />
        </div>
        
        <Link title="Sair" to="/">
          <IoLogOutOutline />
        </Link>
      </Profile>
    </Container>
  );
}
