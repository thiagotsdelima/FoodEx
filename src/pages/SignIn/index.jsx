import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from "../../hooks/auth";

import { Container, Form } from './styles';


export function SignIn() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  function handleSignIn(){ signIn({ email, password}) }

return (
<Container>
      <div className="logo">
        <img src="/Polygon1.svg" alt="Logo" /> 
        <h1>food explorer</h1>
      </div>
<Form>
  <h1>Faça login</h1>

  <label><span>E-mail</span>
  <Input 
  placeholder="Exemplo: exemplo@exemplo.com.br"
  type="text"
  onChange={e => setEmail(e.target.value)}
  />
  </label>

  <label><span>Senha</span>
  <Input 
  placeholder="No mínimo 6 caracteres"
  type="Password"
  onChange={e => setPassword(e.target.value)}
  />
  </label>

  <Button title="Entrar" onClick={handleSignIn} />
  <Link to="/register">
  Criar uma conta
  </Link>
</Form>


</Container>
);
}