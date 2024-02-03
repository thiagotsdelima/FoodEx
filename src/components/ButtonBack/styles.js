import styled from 'styled-components';

export const Container = styled.div`
  max-width: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  user-select: none;
  

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONTS.Poppins300Bold};
  

  > svg {
    font-size: clamp(2.4rem, 4vw, 3.2rem);
    padding-top: 0.1rem;
  }

  transition: filter 0.4s ease-in-out;
  


`;