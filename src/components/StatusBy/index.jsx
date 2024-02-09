import { useState } from 'react'; 
import { Container } from "./styles";

export function StatusBy({ ...rest }) {
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
  return (
    <Container>
      <label htmlFor="">Categoria</label>
      <select value={selectedValue} onChange={handleChange} {...rest}>
        <option value="">Selecione uma opção</option>
        <option value="sobremesas">Sobremesas</option>
        <option value="bebidas">Bebidas</option>
        <option value="refeicoes">Refeições</option>
      </select>
    </Container>
  );
}



