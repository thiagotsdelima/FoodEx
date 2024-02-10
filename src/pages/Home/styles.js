import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 10.5rem 1fr 6.6rem;
grid-template-areas:
"header"
"content"
"footer"
;
.Header {
    background-color: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    height: 200px;
    max-width: 1120px;
    display: flex;
    align-items: center; 
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    border-radius: 8px;
    margin: 200px auto 68px; 
  
}


.Header img {
    width: 100%; 
    max-width: 656px; 
    height: auto; 
    margin-bottom: 186px; 
}

.wrapper h2, .wrapper p {
  
}


.wrapper h2 {
    font-family: ${({ theme }) => theme.FONTS.Poppins500Medium};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 10px; 
}

.wrapper p {
   font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
   color: ${({ theme }) => theme.COLORS.GRAY_300};
   
}

.contentWrapper {
      min-height: 100vh;
      display: grid;
      place-items: center;
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {

}
`;

