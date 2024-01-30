import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "logo form";
  align-items: center;
  

  .logo {
    gap: 1.901rem;
    padding-right: 2rem;
    margin-bottom: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo img {
    width: 4.94rem;
    height: 4.75rem;
    
    
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    border-bottom-style: none;
    border-bottom-color: none;
    border-radius: 1.6rem;
    padding: 2rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    gap: 3.2rem;
    
  h1 {
    font-family: ${({ theme }) => theme.FONTS.Poppins400Medium};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  span {
    font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  input {
    border-radius: .5rem;
    padding-left: 0.8rem;
    margin: 0;
    height: 4.8rem;
    width: 34.8rem;
  }
  input::placeholder {
    position: absolute;
    z-index: 1;
    font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  button {
    // Seus estilos para button
  }

  Link {
    
    font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
