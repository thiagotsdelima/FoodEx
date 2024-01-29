import { api } from '../../services/api'
import { useState } from "react";
import { api } from "../../services/api"
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Background } from './styles';

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
<Background />
<Form>
  <h1>Crie sua conta</h1>
  
  <label>Seu nome
  <Input 
  placeholder="Name"
  type="text"
  onChange={e => setName(e.target.value)}
  />
  </label>

  <label>E-mail
  <Input 
  placeholder="E-mail"
  type="text"
  onChange={e => setEmail(e.target.value)}
  />
  </label>

  <label>Senha
  <Input 
  placeholder="Password"
  type="Password"
  onChange={e => setPassword(e.target.value)}
  />
  </label>

  <Button title="Register" onClick={handleSignUp} />
  <Link to="/">
  Já tenho uma conta
  </Link>
</Form>
</Container>
);
}