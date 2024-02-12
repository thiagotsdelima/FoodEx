import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Meals } from './Meals';

export function MealsModule() {
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
        <Meals key={meal.id} meal={meal} />
      ))}
    </div>
  );
}
