import { Container, Profile, MobileIcon, MobileStar } from './styles';
import { Link } from 'react-router-dom';
import { Input } from '../Input';
import { Button } from '../Button';
import { IoLogOutOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { PiReceiptThin } from "react-icons/pi";

export function Header({ onChange }) {
  return (
    <Container>
        <Link>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        </Link>
      <Link to="/">
        <img src="/public/Polygon1.svg" alt="Logo" /> 
        <h1>FoodExplorer</h1>
      </Link>
      <Link>
        <MobileStar>
          <PiReceiptThin />
        </MobileStar>
      </Link>

       
      
        <Input
        type="text"
        placeholder="Busque por pratos ou ingredientes" 
        onChange={onChange}
        />
      
      
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
