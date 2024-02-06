import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { MealPhoto } from './MealPhoto';

export function MealPhotoModule() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    api.get('/meals')
      .then(response => {
        setMeals(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {meals.map(meal => (
        <MealPhoto key={meal.id} meal={meal} />
      ))}
    </div>
  );
}
