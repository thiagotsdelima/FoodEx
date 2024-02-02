import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      // Define o token de autorização para futuras solicitações
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });
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
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if (token && user) {
      // Define o token de autorização para futuras solicitações
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
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
