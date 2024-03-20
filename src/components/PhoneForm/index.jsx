import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../input'; 
import { Button } from '../Button'; 
import { useAuth } from "../../hooks/auth"; 
import { Container } from './styles';

export function PhoneForm({ formType, onSubmit, name, setName, email, setEmail, password, setPassword }) {
  const { signIn } = useAuth();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 770);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (formType === 'signUp') {
      onSubmit({ name, email, password });
    } else {
      signIn({ email, password });
    }
  };

  return isMobile ? (
    <Container>
      {formType === 'signUp' && (
        <label>Seu nome
          <Input 
            placeholder="Exemplo: Maria da Silva"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      )}
      <label>Email
        <Input 
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>Senha
        <Input 
          placeholder="No mínimo 6 caracteres"
          type="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <Button title={formType === 'signUp' ? "Register" : "Entrar"} onClick={handleSubmit} />
      <Link to={formType === 'signUp' ? "/" : "/register"} className="myStylizedLink">
        {formType === 'signUp' ? "Já tenho uma conta" : "Criar uma conta"}
      </Link>
    </Container>
) : null;
}
