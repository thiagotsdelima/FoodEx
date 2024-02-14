import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Container } from './styles';

export function AmountControls({ amount, setAmount }) {
  const handleIncrement = () => setAmount(prevAmount => prevAmount + 1);
  const handleDecrement = () => setAmount(prevAmount => Math.max(prevAmount - 1, 1));

  return (
    <Container>
      <button onClick={handleDecrement}>
        <FiMinus />
      </button>
      <span>{amount.toString().padStart(2, '0')}</span>
      <button onClick={handleIncrement}>
        <FiPlus />
      </button>
    </Container>
  );
};
