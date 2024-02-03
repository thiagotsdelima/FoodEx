import styled from 'styled-components';

export const Container = styled.button`
 
  height: 1,875rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.FONTS.Poppins100Medium};
    justify-content: center;
    align-items: center;
    border: 0px;
    margin: 1.2rem auto;
    border-radius: 0.3125rem;
    padding: 0 1rem;
    text-align: center;

    &:disabled { 
      opacity: 0.5;
    } 
  
`;