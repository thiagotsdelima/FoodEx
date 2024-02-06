import { Container, Profile, MobileIcon, MobileStar, Found, InputContainer } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { FaSearch, FaBars } from 'react-icons/fa';
import { USER_ROLES } from "../../utils/roles"
import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth';

export function Header({ onChange }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  function handleSignOut() {
    signOut();
    navigate(-1);
  }

  function handleAddNewDish() {
    navigate('/adminAddMeals'); 
  }

  return (
    <Container>
      <MobileIcon>
        <FaBars />
      </MobileIcon>

      {toggleMenu && (
        <nav>
          <ul>
            {USER_ROLES.ADMIN.includes(user?.role) ? (
              <>
                <li>
                  <button onClick={handleAddNewDish}>Novo Prato</button>
                </li>
              </>
            ) : null}
            <li>
              <button onClick={handleSignOut}>Sair</button>
            </li>
          </ul>
        </nav>
      )}

      <Found>
        <img src="/Polygon1.svg" alt="Logo" />
        <h1>food explorer</h1>
        {userType === 'admin' && <p>admin</p>}
      </Found>

      <MobileStar onClick={() => setToggleMenu(!toggleMenu)}>
       
        <img src="/Frame.png" alt="image of a torn sheet" />
        
      </MobileStar>

      <InputContainer>
        <FaSearch className="inputIcon" />
        <input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onChange(searchValue)}
        />
      </InputContainer>

      <Profile>
      {USER_ROLES.ADMIN.includes(user?.role) ?(
      
          <Button title="Novo Prato" onClick={handleAddNewDish}>
            Novo Prato
          </Button>
        ) : (
          
          <Button title="Pedidos (0)">
            <img src="/sheet.svg" alt="image of a torn sheet" />
          </Button>
        )}
        <Link to="/" title="Sair" onClick={handleSignOut}>
          <img src="/arrow.png" alt="right arrow" />
        </Link>
      </Profile>
    </Container>
  );
}
