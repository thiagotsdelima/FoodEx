import { Routes, Route, Navigate } from 'react-router-dom';
import { AddMeal } from '../pages/AddMeal';
import { EditMeal } from '../pages/EditMeal';
import { Home } from '../pages/Home';



export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addMeal" element={<AddMeal />} />
      <Route path="/editMeal" element={<EditMeal />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
