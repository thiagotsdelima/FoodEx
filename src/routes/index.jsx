import { BrowserRouter } from "react-router-dom";
import { useAuth } from '../hooks/auth';
import { USER_ROLE } from '../utils/roles';
import React, { useEffect } from 'react';
import { CustomerRoutes } from './customer.routes';
import { AdminRoutes } from './admin.routes';
import { AuthRoutes } from './auth.routes';
import { api } from '../services/api';


export function Routes() {
  const {user, signOut} = useAuth();

useEffect(() => {
  api.get('/users/validated', { withCredentials: true })
    .then((response) => {
      alert('Usuário validado com sucesso.');
    })
    .catch((error) => {
      if (error.response?.status === 401) {
        signOut();
      }
})
},[]);

  function AccessRoute() {
    switch(user.role){ 
    case USER_ROLE.ADMIN: return <AdminRoutes />; 
    case USER_ROLE.CUSTOMER: return <CustomerRoutes />;
    default: return <CustomerRoutes />;
    }
   }

  return(
    <BrowserRouter>
    {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  )
}