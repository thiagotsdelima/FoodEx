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
      place-items: center; 
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
@media(max-width: ${DEVICE_BREAKPOINTS.MD}) {

}
`;

export const PhoneFormContainer = styled.div`

  
`;