import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  
  padding: 8rem;

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
    width: 47rem;
    height: 50rem;
    padding: 3.4rem 6.4rem;
    
    border: none;
    border-bottom-style: none;
    border-bottom-color: none;
    border-radius: 1.6rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
    
  .myTitle {
    display: flex;
    justify-content: center;
    font-family: ${({ theme }) => theme.FONTS.Poppins400Medium};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 3.2rem; 
  }

  label span {
    
    font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  input {
    margin-bottom: 3.2rem;
    border-radius: .5rem;
    padding-left: 0.8rem;
    margin-top: .8rem;
    height: 4.8rem;
    width: 34.8rem; 
    border: 1px;
    border-style: solid; 
    border-color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  input::placeholder {
    position: absolute;
    z-index: 1;
    font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  button {
    margin-bottom: 3.2rem; 
    height: 4.8rem;
    width: 34.8rem;
  }
 

  .myStylizedLink {
    display: flex;
    justify-content: center;
    font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
  }
`;