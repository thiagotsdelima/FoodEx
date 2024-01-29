import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from "../../hooks/auth";

import { Container, Form, Background } from './styles';


export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  function handleSignIn(){ signIn({ email, password}) }

return (
<Container>
<Form>
  <h1>Faça login</h1>

  <label>E-mail
  <Input 
  placeholder="Exemplo: exemplo@exemplo.com.br"
  type="text"
  onChange={e => setEmail(e.target.value)}
  />
  </label>

  <label> Senha
  <Input 
  placeholder="Password"
  type="Password"
  onChange={e => setPassword(e.target.value)}
  />
  </label>

  <Button title="Entrar" onClick={handleSignIn} />
  <Link to="/register">
  Criar uma conta
  </Link>
</Form>

<Background />
</Container>
);
}