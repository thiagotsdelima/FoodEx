  import { Container, Profile, MobileIcon, MobileStar, Found, InputContainer, AdminTag, StyledButton, Nav } from './styles';
  import { Link, useNavigate } from 'react-router-dom';
  import { Button } from '../Button';
  import { FaSearch, FaBars } from 'react-icons/fa';
  import { api } from '../../services/api';
  import { USER_ROLE } from "../../utils/roles";
  import { useState, useEffect  } from 'react'
  import { debounce } from 'lodash';
  import { useAuth } from '../../hooks/auth';
  import { useCart } from '../../hooks/cart';
  import { Rings } from 'react-loader-spinner';
  import isEqual from 'lodash/isEqual';

  export function Header({ onSearchChange, valueSearch }) {
    const [isListVisible, setIsListVisible] = useState(false);
    const [lastSearchValue, setLastSearchValue] = useState(''); 
    const [ifSearchChange, setIfSearchChange] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false);
    const { cart } = useCart();
  

    const uniqueItemsCount = cart.length; 
  
    const handleSignOut = () => {
      signOut();
      navigate('/signIn');
    };
  
    const handleAddNewDish = () => {
      navigate('/addMeal');
    };

    const handleDetails = (id) => {
      navigate(`/details/${id}`);
    };
  
    const handleOrderHistory = () => {
      if (cart.length === 0) {
        alert("Por favor, adicione itens antes de visualizar os pedidos.");
        return;
      }
      navigate(`/mealOrder/${user.id}`);
    };

 
  useEffect(() => {
    const debouncedFetch = debounce(() => {
      setLoading(true);
      if (valueSearch && !isEqual(valueSearch, lastSearchValue)) {
        api.get('/meals', { params: { search: valueSearch } })
          .then(response => {
            
            setIfSearchChange(response.data);
            setLastSearchValue(valueSearch); 
            setIsListVisible(response.data.length > 0);
          })
          .catch(error => {
            console.error("Erro ao buscar pratos", error);
            setIsListVisible(false);
          })
          .finally(() => {
            setLoading(false); 
          });
      } else if (!valueSearch) {
        setIfSearchChange([]);
        setIsListVisible(false);
        setLoading(false); 
      }
    }, 500);

    debouncedFetch();
    return () => debouncedFetch.cancel();
  }, [valueSearch]);
  
  

    return (
      <Container>
        <MobileIcon onClick={() => setToggleMenu(!toggleMenu)} aria-label="Toggle navigation menu">
        <FaBars />
        </MobileIcon>


        {toggleMenu && (
          <Nav>
                        <header>
                        <Link onClick={() => setToggleMenu(false)}> X Menu</Link>
                        </header>
                        <div className="menuHamburguer">
                          <FaSearch className="inputIcon" />
                            <input
                                type="text"
                              placeholder="Busque por pratos ou ingredientes"
                        value={valueSearch}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                  {loading && (
                    <div className="loader">
                      <Rings color="#065E7C" width="110" height="110" />
                    </div>
                  )}
                  {!loading && ifSearchChange.length > 0 && (
                    <ul className={`${isListVisible ? 'visible' : ''}`}>
                      {ifSearchChange.map(searchItem => (
                        <li key={searchItem.id} onClick={() => handleDetails(searchItem.id)}>
                          {searchItem.name}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  </div>
                  {USER_ROLE.ADMIN.includes(user?.role) && (
                    <button className='buttonNewDishe' onClick={handleAddNewDish}>Novo Prato</button>
                  )}
                  <button type="button" onClick={handleSignOut}>
                    Sair
                  </button>     
          </Nav>
        )}

        <Found>
          <img src="/Polygon1.svg" alt="Logo" />
          <h1>food explorer</h1>
          {USER_ROLE.ADMIN.includes(user?.role) && (
          <AdminTag><p>admin</p></AdminTag>
          )}
        </Found>

        {!USER_ROLE.ADMIN.includes(user?.role) ? (
                <MobileStar onClick={handleOrderHistory}>
                  <img src="/sheet.svg" alt="image of a torn sheet" />
                  {uniqueItemsCount > 0 && (
                      <div className="counter">{uniqueItemsCount}</div>
                  )}
                </MobileStar>
              ) : null}



        <InputContainer $isAdmin={USER_ROLE.ADMIN.includes(user?.role)}>
        <FaSearch className="inputIcon" />
        <input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            value={valueSearch}
            onChange={(e) => onSearchChange(e.target.value)}
        />
            {loading && (
        <div className="loader">
          <Rings color="#065E7C" width="110" height="110" />
        </div>
      )}
      {!loading && ifSearchChange.length > 0 && (
        <ul className={`${isListVisible ? 'visible' : ''}`}>
          {ifSearchChange.map(searchItem => (
            <li key={searchItem.id} onClick={() => handleDetails(searchItem.id)}>
              {searchItem.name}
            </li>
          ))}
        </ul>
      )}
    </InputContainer>

        <Profile>
        {USER_ROLE.ADMIN.includes(user?.role) ?(
        
            <StyledButton  title="Novo Prato" onClick={handleAddNewDish}>
              Novo Prato
            </StyledButton >
          ) : (
            
            <Button title={`Pedidos (${uniqueItemsCount})`} onClick={handleOrderHistory}>
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
