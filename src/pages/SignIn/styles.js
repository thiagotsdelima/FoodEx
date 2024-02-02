import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
      "menu"
      ;
      padding: 2rem;
      gap: 15.625rem;
 
  .logo {
    gap: 1.901rem;
    padding-right: 1.25rem;
    margin-bottom: 4.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo img {
    width: 3.0625rem;
    height: 2.9375rem;
    
    
  }
  .logo h1 {
    
    font-family: ${({ theme }) => theme.FONTS.RobotoGiantBold};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  
  @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
      "top"
      "content";
    justify-content: center;
    padding: 0.625rem; 
    gap: 0.625rem;
    
    .logo {
     margin-top: 1.875rem;
     gap: 0.625rem;
    }


  .logo img {
    width: 2.6875rem;
    height: 2.6875rem;
  }

  .logo h1 {
    
    font-weight: 700;
    font-size: 2.25rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  input {
    margin-bottom: 2rem;
    border-radius: 0.3125rem;
    padding-left: 0.5rem;
    margin-top: .5rem;
    height: 3rem;
    width: 19.75rem; 
    border: none;
    border-bottom-style: none;
    border-bottom-color: none;
  }
  button {
    margin-bottom: 2rem; 
    height: 3rem;
    width: 19.75rem;
  }
  a {
    margin-bottom: 1.875rem;
  }
  }
  
 
`;

export const Form = styled.div`

    width: 29.375rem;
    height: 34.375rem;
    padding: 2.125rem 4rem;
    
    border: none;
    border-bottom-style: none;
    border-bottom-color: none;
    border-radius: 1rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
    
  .myTitle {
    margin-top: 3.125rem;
    display: flex;
    justify-content: center;
    font-family: ${({ theme }) => theme.FONTS.Poppins400Medium};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 2rem; 
  }

  label span {
    
    font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  input {
    margin-bottom: 2rem;
    border-radius: 0.3125rem;
    padding-left: 0.5rem;
    margin-top: .5rem;
    height: 3rem;
    width: 21.75rem; 
    border: 0.00625rem;
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
    margin-bottom: 2rem; 
    height: 3rem;
    width: 21.75rem;
  }
 

  .myStylizedLink {
    display: flex;
    justify-content: center;
    font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`;

export const PhoneFormContainer = styled.div`

  
`;
