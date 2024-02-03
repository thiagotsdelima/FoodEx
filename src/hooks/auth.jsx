import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const { data } = await api.post('/sessions', { email, password });
      localStorage.setItem('@foodexplorer:token', data.token);
      localStorage.setItem('@foodexplorer:user', JSON.stringify(data.user));
     
      
      api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      
      setData({ user: data.user, token: data.token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("not was possible goes into");
      }
    }
  }

  // A função signOut deve ser definida no escopo do componente AuthProvider
  function signOut() {
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");

    // Limpa o cabeçalho de autorização
    api.defaults.headers.common['Authorization'] = '';

    // Limpa o estado da aplicação
    setData({});
  }

  useEffect(() => { 
    const user = localStorage.getItem("@foodexplorer:user");
    const token = localStorage.getItem("@foodexplorer:token"); 
    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) });
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
