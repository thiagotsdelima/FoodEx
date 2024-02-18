import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap; 
  text-align: center;
  white-space: nowrap;
  max-width: fit-content;
  line-height: 2.4rem;
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
  
  white-space: nowrap;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  border-radius: 0.5rem; // Bordas arredondadas
`;