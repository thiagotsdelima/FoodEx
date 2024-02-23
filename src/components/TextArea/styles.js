import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.textarea`

  text-align: justify;
  overflow-wrap: break-word;


  border: none;
  box-shadow: none;
  outline: none;

  resize: none;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background: transparent;

  

  pointer-events: none;
  user-select: none;
  cursor: default;
  
  padding: 3rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 1.2rem;
  }


`;