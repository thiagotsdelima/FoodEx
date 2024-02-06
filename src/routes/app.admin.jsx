import { Routes, Route } from 'react-router-dom';

import { AdminHome } from '../pages/AdminHome';
import { AdminAddMeals } from '../pages/AdminAddMeals';
import { AdminEditMelas } from '../pages/AdminEditMelas';
import { AdminDetails } from '../pages/AdminDetails';
import { AdminMealOrder } from '../pages/AdminMealOrder';



export function AppAdminRoutes() {
  return (
    <Routes>

      <Route path="/" element={ <AdminHome />} />
      <Route path="/adminAddMeals" element={ <AdminAddMeals />} />
      <Route path="/adminEditMelas/:id" element={ <AdminEditMelas />} />
      <Route path="/adminDetails/:id" element={ <AdminDetails />} />
      <Route path="/adminMealOrder" element={ <AdminMealOrder />} />
    
    </Routes>
  )
}