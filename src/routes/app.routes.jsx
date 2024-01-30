import { Routes, Route, Navigate } from 'react-router-dom';
import { UserMealDescription } from '../pages/UserCostumer/UserMealDescription';
import { UserEfexHome } from '../pages/UserCostumer/UserEfexHome';
import { UserMealNew } from '../pages/UserCostumer/UserMealNew';
import { UserMealFound } from '../pages/UserCostumer/UserMealFound';
import { UserDetails } from '../pages/UserCostumer/UserDetails';

export function AppRoutes() {

  const user = localStorage.getItem("@foodexplorer:user");
 
  return (
    <Routes>
      <Route path="/" element={<UserEfexHome />} />
      <Route path="/userMealDescription" element={<UserMealDescription />} />
      <Route path="/userMealNew" element={<UserMealNew />} />
      <Route path="/userMealFound" element={<UserMealFound />} />
      <Route path="/userDetails/:id" element={<UserDetails />} />
      { !user && <Route path="*" element={<Navigate to="/" />}/> }
    </Routes>
  );
}
