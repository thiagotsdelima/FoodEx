import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from '../Button';
import { Container, QuantitySelector } from "./styles"; 

export function ButtonIncrement({ meal }) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(meal.price);
  const navigate = useNavigate();

  useEffect(() => {
    if (meal) {
      setTotalPrice(meal.price * quantity);
    }
  }, [quantity, meal]);

  const handleIncrement = () => {
    setQuantity(qty => qty + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(qty => qty - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: meal.id,
      name: meal.name,
      quantity,
      price: meal.price,
      totalPrice
    });
  };

  return (
    <Container>
      <div onClick={() => navigate(-1)}>
        <IoIosArrowBack />
        Voltar
      </div>
      <div>
        <h3>{meal.name}</h3>
        <p>Preço: R$ {meal.price.toFixed(2)}</p>
        <QuantitySelector>
        <button onClick={handleDecrement} aria-label="Diminuir quantidade">-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement} aria-label="Aumentar quantidade">+</button>
        </QuantitySelector>
        <Button onClick={handleAddToCart}>
          Incluir (R$ {totalPrice.toFixed(2)})
        </Button>
      </div>
    </Container>
  );
}
