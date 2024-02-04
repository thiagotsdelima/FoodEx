import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const { data } = await api.post('/sessions', { email, password });
      const { user, token } = response.date;
      
      localStorage.setItem('@foodexplorer:user', JSON.stringify(data.user));
      localStorage.setItem('@foodexplorer:token', token);
      
      api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      
      setData({ user, token });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("not was possible goes into");
      }
    }
  }

 
  function signOut() {
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");
    setData({});
  }

  useEffect(() => { 
    const token = localStorage.getItem("@foodexplorer:token"); 
    const user = localStorage.getItem("@foodexplorer:user"); 
    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user)});
    }
  }, []);
  
  

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
