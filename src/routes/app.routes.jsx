import { Routes, Route } from 'react-router-dom';
import { UserMealDescription } from '../pages/UserMealDescription';
import { UserEfexHome } from '../pages/UserEfexHome';
import { UserMealNew } from '../pages/UserMealNew';
import { UserMealFound } from '../pages/UserMealFound';
import { UserDetails } from '../pages/UserDetails';

export function AppRoutes() {


  
  return (
    <Routes>
      <Route path="/" element={<UserEfexHome />} />
      <Route path="/userMealDescription" element={<UserMealDescription />} />
      <Route path="/userMealNew" element={<UserMealNew />} />
      <Route path="/userMealFound" element={<UserMealFound />} />
      <Route path="/userDetails/:id" element={<UserDetails />} />
    </Routes>
  );
}
