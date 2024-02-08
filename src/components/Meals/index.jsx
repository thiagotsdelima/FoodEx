import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { useCart } from '../../hooks/cart'; 
import { FiMinus, FiPlus, FiHeart, FiEdit3 } from 'react-icons/fi';
import { api } from '../../services/api';
import { MealPhoto } from '../MealPhoto'; 
import { Container } from './styles';
import { USER_ROLE } from '../../utils/roles'; 
import { useAuth } from '../../hooks/auth';

export function Meals({ data }) {
  if (!data) return null;
  const { user } = useAuth();
  const { cart, setCart } = useCart();
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate();

  const handleIncrement = () => setAmount(prevAmount => prevAmount + 1);
  const handleDecrement = () => setAmount(prevAmount => Math.max(prevAmount - 1, 1));

  const handleIncludeNewItem = () => {
    const newItem = {
      ...data,
      amount,
      total_price: amount * data.price,
    };
    setCart([...cart, newItem]);
  };

  return (
    <Container>
      <div className='main'>
        <span>
        {data.photo_food && <MealPhoto meal={data} />}
        </span>
        <div className="request">
          <strong>{data.name}</strong>
          <p>{data.description}</p>
          <p className="price">R$ {data.price.toFixed(2)}</p>
          {!USER_ROLE.ADMIN.includes(user?.role) && (
            <FiHeart className="likeIcon" />
          )}
           
           {!USER_ROLE.ADMIN.includes(user?.role) && (
            <div className="wrapperAmountInclude">
              <div className="amount">
                <button onClick={() => setAmount(prevAmount => Math.max(prevAmount - 1, 1))}>
                  <FiMinus />
                </button>
                <span>{amount.toString().padStart(2, '0')}</span>
                <button onClick={() => setAmount(prevAmount => prevAmount + 1)}>
                  <FiPlus />
                </button>
              </div>
              <Button title="Incluir" onClick={handleIncludeNewItem} />
            </div>
          )}
          {USER_ROLE.ADMIN.includes(user?.role) && (
            <FiEdit3 className="editIcon" onClick={() => console.log('Edit clicked')} />
          )}
          </div>         
        </div>
     
    </Container>
  );
}
