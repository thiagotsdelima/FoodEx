import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { MealOrder } from '../pages/MealOrder';
import { Details } from '../pages/Details';
import { Bank } from '../pages/Bank';
import { MealSeasoning } from '../pages/MealSeasoning';


export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mealOrder/:id" element={<MealOrder />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/bank" element={<Bank />} />
      <Route path="/mealSeasoning" element={<MealSeasoning />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
