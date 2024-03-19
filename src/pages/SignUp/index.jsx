import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';
import { PhoneForm } from "../../components/PhoneForm";
import { Container, Form, PhoneFormContainer } from './styles';

export function SignUp() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (isSmallScreen) {
      if (!email || !password) {
        return alert("Preencha todos os campos visíveis");
      }
    } else {
      if (!name || !email || !password) {
        return alert("Preencha todos os campos");
      }
    }

    try {
      await api.post("/users", {name, email, password});
      alert("Usuário registrado com sucesso");
      navigate("/");
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : "O registro do usuário falhou";
      alert(errorMessage);
    }
  };

  return (
    <Container>
      <div className="logo">
        <img src="/Polygon1.svg" alt="Logo" />
        <h1>food explorer</h1>
      </div>
      <Form onSubmit={handleSignUp}>
        <h1 className='myTitle'>Crie sua conta</h1>
        {!isSmallScreen && (
          <label htmlFor="userName">Seu nome
            <Input placeholder="Exemplo: Maria da Silva" type="text" id="userName" onChange={e => setName(e.target.value)} />
          </label>
        )}
        <label htmlFor="userEmail">Email
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="email" id="userEmail" onChange={e => setEmail(e.target.value)} />
        </label>
        <label htmlFor="userPassword">Senha
          <Input placeholder="No mínimo 6 caracteres" type="Password" id="userPassword" onChange={e => setPassword(e.target.value)} />
        </label>
        <Button type="submit" title="Criar conta" />
        <Link to="/" className="myStylizedLink">Já tenho uma conta</Link>
      </Form>
      <PhoneFormContainer>
        <PhoneForm formType="signUp" onSubmit={handleSignUp} />
      </PhoneFormContainer>
    </Container>
  );
}
