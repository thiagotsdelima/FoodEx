import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  
  padding: 2.5rem 5rem;

  @media (max-width: 768px) {
    form {
      grid-area: none;
      display: none;
    }
  }

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
    "top"
    "content";
  }

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
 

  @media (max-width: 376px) {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;

    .logo {
      position: absolute;
      margin: 0;
      padding: 0;
      left: 0;
      margin-top: 15.8rem;
      width: 100%;
      z-index: -1;
  }


  .logo img {
    width: 4.3rem;
    height: 4.3rem;
  }
  .logo h1 {
   
    font-weight: 700;
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
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
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
    grid-area: none;
  }
  
`;
