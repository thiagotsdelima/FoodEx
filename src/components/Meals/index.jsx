import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { useCart } from '../../hooks/cart'; 
import { FiHeart } from 'react-icons/fi';
import { PiPencilSimple } from "react-icons/pi";
import { MealPhoto } from '../MealPhoto'; 
import { Container } from './styles';
import { USER_ROLE } from '../../utils/roles'; 
import { useAuth } from '../../hooks/auth';
import { Seasoning } from '../Seasoning';
import { AmountControls } from '../AmountControls';
import { TbPointFilled } from "react-icons/tb";



export function Meals({ data, customStyle, isInDetailsPage = false }) {
  if (!data) return null;
  const { user } = useAuth();
  const { cart, setCart } = useCart();
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate();
  const isAdmin = USER_ROLE.ADMIN.includes(user?.role);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsScreenSmall(window.innerWidth < 768);
    };

    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const handleIncludeNewItem = () => {
    setCart(currentCart => {
      
      const existingItemIndex = currentCart.findIndex(cartItem => cartItem.id === data.id);
  
      if (existingItemIndex > -1) {
       
        const updatedCart = [...currentCart];
        const existingItem = updatedCart[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + amount,
          total_price: (existingItem.amount + amount) * existingItem.price,
        };
        updatedCart[existingItemIndex] = updatedItem;
        return updatedCart;
      } else {
        
        return [...currentCart, {
          ...data,
          amount,
          total_price: amount * data.price,
        }];
      }
    });
  };
  

  const handleDetails = () => {
    navigate(`/details/${data.id}`);
  };

  const handleEditMeal = () => {
    navigate(`/editMeal/${data.id}`);
  };

  const showAmountControls = !isAdmin && !isInDetailsPage;

  return (
    <Container className={`mealContainer ${customStyle}`}> 
      <div className='main'>
      {!USER_ROLE.ADMIN.includes(user?.role) && !isInDetailsPage && (
        <FiHeart className="likeIcon" />
      )}

      {USER_ROLE.ADMIN.includes(user?.role) && !isInDetailsPage && (
        <PiPencilSimple size={30} className="editIcon" onClick={handleEditMeal}/>
      )}

        <span className="mealPhotoContainer" onClick={handleDetails}>
          {data.photo_food && <MealPhoto meal={data} isAdmin={isAdmin} isInDetailsPage={isInDetailsPage} />}
        </span>
        {USER_ROLE.ADMIN.includes(user?.role) ?(
          <div className="request">
              <div className="menuAdmin">
              <strong onClick={handleDetails}>
                {data.name} {!isInDetailsPage && (<span className="arrowSymbol">&#62;</span>)}
              </strong>
              <p onClick={handleDetails}>{data.description}</p>
              {!isInDetailsPage && (
                <p className="price">R$ {typeof data.price === 'number' ? data.price.toFixed(2) : 'Preço indisponível'}</p>
              )}
              <div className="seasoningWrapper">
                {isInDetailsPage && data.seasonings && (
                  <Seasoning seasonings={data.seasonings} />
                )}
              </div>
              
              {showAmountControls && (
          <div className="wrapperAmountInclude">
            <AmountControls amount={amount} setAmount={setAmount} />
            <Button className="buttonInclude" onClick={handleIncludeNewItem}>
              Incluir <TbPointFilled size={10} style={{ marginLeft: '4px', marginRight: '4px' }} /> R$ {(data.price * amount).toFixed(2)}
            </Button>
          </div>
        )}
              {isInDetailsPage && (
                <div className="StyleClick">
                  <Button className="adminActionButton" onClick={handleEditMeal}>
                  Editar prato
                  </Button>
                </div>
              )}
            </div>
            </div>
      ) : (
        
        <div className="content">
          <div className="request">
              <strong onClick={handleDetails}>
                {data.name} {!isInDetailsPage && (<span className="arrowSymbol">&#62;</span>)}
              </strong>
              <p onClick={handleDetails}>{data.description}</p>
              {!isInDetailsPage && (
               <p className="price">R$ {Number(data.price).toFixed(2)}</p>
              )}
              <div className="seasoningWrapper">
                {isInDetailsPage && data.seasonings && (
                  <Seasoning seasonings={data.seasonings} />
                )}
              </div>
              <div className="wrapperAmountInclude">
                <div className="amount">
                  <AmountControls amount={amount} setAmount={setAmount} />
                </div>
                <Button className="buttonInclude" onClick={handleIncludeNewItem}>
                    {isInDetailsPage ? (
                      isScreenSmall ? (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img src="/sheet.svg" alt="Ícone de pedido" style={{ marginRight: '4px', width: '15px', height: '14px' }} />
                          <span style={{ fontWeight: '400', marginRight: '.1px', marginLeft: '.1px', fontSize: '12px' }}>Pedido</span>
                          <TbPointFilled size={10} style={{ marginLeft: '1px', marginRight: '1px' }} />
                          <span style={{ fontSize: '12px' }}>
                            R$ {(data.price * amount).toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                          Incluir
                          <TbPointFilled size={10} style={{ marginLeft: '4px', marginRight: '4px' }} />
                          R$ {(data.price * amount).toFixed(2)}
                        </div>
                      )
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Incluir</div>
                    )}
                  </Button>
              </div>
                
        </div>
        </div>
      )} 
      </div>
      
    </Container>
    
  );
}


