import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Container, QuantitySelector, AddButton } from "./style"; 

export default function Details() {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0); // Inicialize com o preço do item
  const navigate = useNavigate();

  const handleIncrement = () => {
    setQuantity(qty => qty + 1);
    // Atualize o preço total aqui, se necessário
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(qty => qty - 1);
      // Atualize o preço total aqui, se necessário
    }
  };

  const handleAddToCart = () => {
    // Adicione a lógica para adicionar ao carrinho aqui
  };

  return (
    <Container>
      <div onClick={() => navigate(-1)}>
        <IoIosArrowBack />
        Voltar
      </div>
      <div>
        <QuantitySelector>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </QuantitySelector>
        <AddButton onClick={handleAddToCart}>Incluir R${totalPrice.toFixed(2)}</AddButton>
      </div>
    </Container>
  )
}
