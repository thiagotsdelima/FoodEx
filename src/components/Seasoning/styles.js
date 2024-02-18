import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap; 
  text-align: center;
  white-space: nowrap;
  max-width: fit-content;
  
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  

`;

export const SeasoningTag = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.4rem 0.8rem;
  font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};
  width: 7rem;
  height: 2.1rem;
  font-size: 1rem;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  border-radius: 0.5rem; // Bordas arredondadas
`;