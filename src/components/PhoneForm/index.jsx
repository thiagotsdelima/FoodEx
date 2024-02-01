import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Input'; 
import { Button } from '../Button'; 
import { useAuth } from "../../hooks/auth"; 
import { Container } from './styles';

export function PhoneForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = () => {
    signIn({ email, password });
  };

  if (!isMobile) return null; 

  return (
    <Container>
      <label><span>Email</span>
        <Input 
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label><span>Senha</span>
        <Input 
          placeholder="No mínimo 6 caracteres"
          type="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <Button title="Entrar" onClick={handleSubmit} />
      <Link to="/register" className="myStylizedLink">Criar uma conta</Link>
    </Container>
  );
}
