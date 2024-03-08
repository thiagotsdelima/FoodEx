import React from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

export function MealPhoto({ meal, isAdmin }) {
  const imageUrl = `${api.defaults.baseURL}/files/${meal.photo_food}`;
  return (
    <Container $isAdmin={isAdmin}>
      <img src={imageUrl} alt={meal.description || "Meal description"} />
    </Container>
  );
}
