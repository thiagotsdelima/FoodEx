import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;

  @media (max-width: 768px) {
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
  background: #f3f3f3;
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
      color: ${({ theme }) => theme.COLORS.Light300};
      font-family: var(--poppins-font-family);
      font-size: clamp(2.7041rem, 3.2vw, 4rem);
      font-weight: 500;
    }

    p {
      color: ${({ theme }) => theme.COLORS.Light300};
      font-family: var(--poppins-font-family);
      font-size: clamp(1.6225rem, 2vw, 2.4rem);
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
   
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
