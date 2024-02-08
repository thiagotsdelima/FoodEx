import { Routes, Route } from 'react-router-dom';
import { AddMeal } from '../pages/AddMeal';
import { EditMeal } from '../pages/EditMeal';
import { Home } from '../pages/Home';
import { MealFinishing } from '../pages/MealFinishing';
import { MealOrder } from '../pages/MealOrder';
import { MealFound } from '../pages/MealFound';
import { Details } from '../pages/Details';
import { Bank } from '../pages/Bank';
import { MealSeasoning } from '../pages/MealSeasoning';


export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mealFinishing" element={<MealFinishing />} />
      <Route path="/mealOrder" element={<MealOrder />} />
      <Route path="/mealFound" element={<MealFound />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/bank" element={<Bank />} />
      <Route path="/mealSeasoning" element={<MealSeasoning />} />
      <Route path="/addMeal" element={<AddMeal />} />
      <Route path="/editMeal" element={<EditMeal />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
