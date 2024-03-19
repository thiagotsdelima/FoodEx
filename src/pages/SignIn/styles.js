import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr auto; 
      grid-template-areas: 
      "menu menu"
      "footer footer"; 
      place-items: center;
    

    &:after {
      content: ""; 
      display: block; 
      height: 50px; 
      grid-area: footer; 
    }
      
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 4.375rem;
        gap: 1.901rem;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    padding: 2rem;
    margin-top: 3.125rem;
    .logo {
     margin-top: 1.875rem;
     gap: 0.625rem;
    }
    .logo img {
    margin-right: 10px;
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

    width: 29.75rem;
    height: 34.8125rem;
    padding: 0.125rem 4rem;
    margin-top: 2.625rem;
   
    border: none;
    border-bottom-style: none;
    border-bottom-color: none;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    .myTitle {
      display: flex;
      justify-content: center;
      margin-top: 3.125rem;
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
      border: 1px;
      border-style: solid;
      border-color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    input::placeholder {
      font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
    input::-ms-reveal {
      display: none;
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

    margin-top: -13px;
  
 input::-ms-reveal {
    display: none;
    }
  
`;
