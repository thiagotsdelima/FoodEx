  import { Container, Profile, MobileIcon, MobileStar, Found, InputContainer, AdminTag, StyledButton } from './styles';
  import { Link, useNavigate } from 'react-router-dom';
  import { Button } from '../Button';
  import { FaSearch, FaBars } from 'react-icons/fa';
  import { USER_ROLE } from "../../utils/roles";
  import { useState } from 'react'
  import { api } from "../../services/api";
  import { useAuth } from '../../hooks/auth';
  
  

  export function Header({ onChange }) {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    function handleSignOut() {
      signOut();
      navigate('/signIn'); 
    }

    function handleAddNewDish() {
      navigate('/addMeal'); 
    }
    function handleOrderHistory() {
      navigate('/mealFound');
    }

    return (
      <Container>
        <MobileIcon onClick={() => setToggleMenu(!toggleMenu)} aria-label="Toggle navigation menu">
        <FaBars />
        </MobileIcon>


        {toggleMenu && (
          <nav>
            <ul>
              {USER_ROLE.ADMIN.includes(user?.role) ? (
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
          {USER_ROLE.ADMIN.includes(user?.role) && (
          <AdminTag><p>admin</p></AdminTag>
          )}
        </Found>

        <MobileStar>
        
          <img src="/Frame.png" alt="image of a torn sheet" />
          
        </MobileStar>

        <InputContainer $isAdmin={USER_ROLE.ADMIN.includes(user?.role)}>
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
        {USER_ROLE.ADMIN.includes(user?.role) ?(
        
            <StyledButton  title="Novo Prato" onClick={handleAddNewDish}>
              Novo Prato
            </StyledButton >
          ) : (
            
            <Button title="Pedidos (0)" onClick={handleOrderHistory}>
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
