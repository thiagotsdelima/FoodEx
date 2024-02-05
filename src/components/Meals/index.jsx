import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { useCart } from '../../hooks/cart'; 
import { FiMinus, FiPlus } from 'react-icons/fi';
import { api } from '../../services/api';
import { Container } from './styles';

export function Meals({ data }) {
  if (!data) return null;
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
          {data.photo_food && <img src={`${api.defaults.baseURL}/files/${data.photo_food}`} alt={data.name} />}
        </span>
        <div className="request">
          <strong>{data.name}</strong>
          <p>{data.description}</p>
          <p className="price">R$ {data.price.toFixed(2)}</p>
          <div className="wrapperAmountInclude">
            <div className="amount">
              <div className="counter">
                <button onClick={handleDecrement}>
                <FiMinus />
                </button>
                <span>{amount.toString().padStart(2, '0')}</span>
                <button onClick={handleIncrement}>
                <FiPlus />
                </button>
              </div>
            </div>
            <Button title="Incluir" onClick={handleIncludeNewItem} />
          </div>         
        </div>
      </div>
    </Container>
  );
}
