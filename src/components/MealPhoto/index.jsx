import React from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

export function MealPhoto({ meal }) {
  const imageUrl = `${api.defaults.baseURL}/files/${meal.photo_food}`;
  return (
    <Container>
      <div>
      <img src={imageUrl} alt={meal.description || "Descrição do prato"} />
      </div>
    </Container>
  );
}
