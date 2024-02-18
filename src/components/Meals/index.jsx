import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { useCart } from '../../hooks/cart'; 
import { FiHeart, FiEdit3 } from 'react-icons/fi';
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

  const handleIncludeNewItem = () => {
    const newItem = {
      ...data,
      amount,
      total_price: amount * data.price,
    };
    setCart([...cart, newItem]);
  };

  const handleClickCard = () => {
    navigate(`/details/${data.id}`);
  };

  return (
    <Container className={`mealContainer ${customStyle}`}> 
      <div className='main'>
        {!USER_ROLE.ADMIN.includes(user?.role) && (
          <FiHeart className="likeIcon" />
        )}
        <span className="mealPhotoContainer" onClick={handleClickCard}>
          {data.photo_food && <MealPhoto meal={data} />}
        </span>
        <div className="request">
          <strong onClick={handleClickCard}>{data.name} <span className="arrowSymbol">&#62;</span></strong>
          <p onClick={handleClickCard}>{data.description}</p>
          <p className="price">R$ {data.price.toFixed(2)}</p>
          <div className="seasoningWrapper">
          {isInDetailsPage && data.seasonings && (
                <Seasoning seasonings={data.seasonings} />
              )}
              </div>
          {!USER_ROLE.ADMIN.includes(user?.role) && (
            
            <div className="wrapperAmountInclude">
              <div className="amount">
                <AmountControls amount={amount} setAmount={setAmount} />
              </div>
              <Button className="buttonInclude" onClick={handleIncludeNewItem}>
              {isInDetailsPage ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                  Incluir 
                  <TbPointFilled size={10} style={{ marginLeft: '4px', marginRight: '4px' }} />
                  R$ {(data.price * amount).toFixed(2)}
                </div>
              ) : "Incluir"}
            </Button>

             
            </div>
          )}
          {USER_ROLE.ADMIN.includes(user?.role) && (
            <FiEdit3 className="editIcon" />
          )}
        </div>         
      </div>
    </Container>
  );
}
