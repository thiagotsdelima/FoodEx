import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { MealOrder } from '../pages/MealOrder';
import { Details } from '../pages/Details';




export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mealOrder/:id" element={<MealOrder />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
