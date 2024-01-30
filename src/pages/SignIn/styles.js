import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo img {
    height: 4.7rem;
    gap: 1rem;
  }
  .logo h1 {
    font-family: ${({ theme }) => theme.FONTS.RobotoGiantBold};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  @media (min-width: 360px) {
    // Seus estilos para telas maiores
  }
`;

export const Form = styled.div`
  flex: 1;

  h1 {
    font-family: ${({ theme }) => theme.FONTS.Poppins400Medium};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .label {
    font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  input {
    // Seus estilos para input
  }

  button {
    // Seus estilos para button
  }

  Link {
    font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
