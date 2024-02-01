import { api } from '../../services/api';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form } from './styles';

export function SignUp() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
   
  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("fill in all fields")
    }
    api.post("/users", {name, email, password})
    .then(() => {
      alert("user successfully registered")
      navigate("/");
    })
    .catch(error => {
     if(error.response) {
     alert(error.response.data.message); 
    }else {
      alert("user has not been registered")
    }
 })
}

return (
<Container>

<Form>
  <h1>Crie sua conta</h1>
  
  <label>Seu nome
  <Input 
  placeholder="Exemplo: Maria da Silva"
  type="text"
  onChange={e => setName(e.target.value)}
  />
  </label>

  <label>E-mail
  <Input 
  placeholder="Exemplo: exemplo@exemplo.com.br"
  type="text"
  onChange={e => setEmail(e.target.value)}
  />
  </label>

  <label>Senha
  <Input 
  placeholder="No mínimo 6 caracteres"
  type="Password"
  onChange={e => setPassword(e.target.value)}
  />
  </label>

  <Button title="Register" onClick={handleSignUp} />
  <Link to="/">
  Já tenho uma conta
  </Link>
</Form>
<PhoneForm formType="signUp" onSubmit={handleSignUp} />
</Container>
);
}