import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
 
  width: fit-content;
  display: flex;
  align-items: center;
  user-select: none;
  

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONTS.Poppins300Bold};
  

  > svg {
    font-size: clamp(2rem, 4vw, 2.5rem);
    padding-top: 0.1rem;
  }

  transition: filter 0.4s ease-in-out;
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: -2rem;
    margin-left: -5rem;
    font-size: 1.3rem;
    svg {
      font-size: 1.5rem;
      
    }
  }

`;