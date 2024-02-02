import { Container, Profile, MobileIcon, MobileStar, Found } from './styles';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Input } from '../Input';
import { Button } from '../Button';
import { FaSearch } from 'react-icons/fa';
import { useAuth } from '../../hooks/auth';
import { FaBars } from "react-icons/fa";
import { FiSearch } from 'react-icons/fi'

export function Header({ onChange }) {
  const { signOut } = useAuth();
  const navigation = useNavigate();
  function handleSignOut(){
    signOut();
    navigation("/");
  }
  
  return (
    <Container>

        <MobileIcon>
          <FaBars />
        </MobileIcon>

      <Found>

        <img src="/Polygon1.svg" alt="Logo" /> 
        <h1>food explorer</h1>

      </Found>
      <MobileStar>
        <img src="/Frame.png" alt="image of a torn sheet" />
      </MobileStar>

        <FaSearch className="inputIcon" />
        <Input
        type="text"
        placeholder="Busque por pratos ou ingredientes" 
        icon={FiSearch} 
        onChange={onChange}
        />

      <Profile>

        <div>
        <Button title="Pedidos (0)">
        <img src="/sheet.svg" alt="image of a torn sheet" />
        </Button>
        </div>
        
        <Link title="Sair" onClick={handleSignOut}>
          <img src="/arrow.png" alt="right arrow" />
        </Link>
        
      </Profile>
      
    </Container>
  );
}
