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



main {
    
  max-width: 112rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
 
}

.Header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  width: 100%;
  height: clamp(9.5rem, 23vw, 26rem);
  margin-top: clamp(4.4rem, 14vw, 1.4rem);
  padding: 0 1rem;
 border-radius: .5rem;
}

.image {
 
  
}

.image img {
margin-left: -80px;
margin-top: -70px;
}

.wrapper {
  flex: 2; 
  padding-left: 2rem; 
  text-align: right;
  
}

h2, p {
  text-align: left;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONTS.Poppins500Medium};
}

p {
  font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
}

   






.contentWrapper {
  
     
    section {

      
    }
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {

}
`;

