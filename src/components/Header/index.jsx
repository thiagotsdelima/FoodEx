import { Container, Profile, MobileIcon, MobileStar, Found } from './styles';
import { Link } from 'react-router-dom';
import { Input } from '../Input';
import { Button } from '../Button';
import { FaSearch } from 'react-icons/fa';

import { FaBars } from "react-icons/fa";


export function Header({ onChange }) {
  return (
    <Container>

        <MobileIcon>
          <FaBars />
        </MobileIcon>

      <Found>

        <img src="/public/Polygon1.svg" alt="Logo" /> 
        <h1>food explorer</h1>

      </Found>
      <MobileStar>
        <img src="/public/Frame.png" alt="image of a torn sheet" />
      </MobileStar>

        <FaSearch className="inputIcon" />
        <Input
        type="text"
        placeholder="Busque por pratos ou ingredientes" 
        onChange={onChange}

        />

      <Profile>

        <div>
        <Button title="Pedidos (0)">
        <img src="/public/sheet.svg" alt="image of a torn sheet" />
        </Button>
        </div>
        
        <Link title="Sair" to="/">
          <img src="/public/arrow.png" alt="right arrow" />
        </Link>
        
      </Profile>
      
    </Container>
  );
}
