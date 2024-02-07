import { Routes, Route, Navigate } from 'react-router-dom';
import { UserMealDescription } from '../pages/UserMealDescription';
import { UserEfexHome } from '../pages/UserEfexHome';
import { UserMealNew } from '../pages/UserMealNew';
import { UserMealFound } from '../pages/UserMealFound';
import { UserDetails } from '../pages/UserDetails';

export function CustomerRoutes() {


  
  return (
    <Routes>
      <Route path="/" element={<UserEfexHome />} />
      <Route path="/userMealDescription" element={<UserMealDescription />} />
      <Route path="/userMealNew" element={<UserMealNew />} />
      <Route path="/userMealFound" element={<UserMealFound />} />
      <Route path="/userDetails/:id" element={<UserDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}