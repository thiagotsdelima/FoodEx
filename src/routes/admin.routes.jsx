import { Routes, Route, Navigate } from 'react-router-dom';
import { AddMeal } from '../pages/AddMeal';
import { EditMeal } from '../pages/EditMeal';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';



export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/addMeal" element={<AddMeal />} />
      <Route path="/editMeal/:id" element={<EditMeal />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
