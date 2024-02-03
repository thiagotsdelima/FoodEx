import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    /* Estilos para telas menores (responsivo) */
    flex-direction: column;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  
  padding: 1rem;
  border-radius: 8px;

  img {
    width: clamp(26.4rem, 31vw, 38.9rem);
    height: clamp(26.4rem, 31vw, 38.9rem);
    object-fit: cover;
    border-radius: 9999rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-family: ${({ theme }) => theme.FONTS.Poppins500Medium};
      font-size: clamp(2.7041rem, 3.2vw, 4rem);
      
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-family: ${({ theme }) => theme.FONTS.Poppins300Regular};
      font-size: clamp(1.6225rem, 2vw, 2.4rem);
      
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
   
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 1rem;
    }

    div {
      align-items: center;
      text-align: center;
    }
  }
`;
