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
  position: relative;
  width: 100%;
  height: clamp(9.5rem, 23vw, 26rem);
  margin-top: clamp(4.4rem, 14vw, 16.4rem);
 
 
  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  > div {
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    > img {
      position: absolute;
      bottom: -1rem;
      left: -5.1rem;
      z-index: 1;
      width: clamp(19.1rem, 58vw, 63.2rem);
    }

     h2 {
      margin-right: 5.3rem;
      z-index: 1;
      white-space: nowrap;
      font-family: ${({ theme }) => theme.FONTS.Poppins500Medium};
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

     p {
      z-index: 1;
      width: clamp(55%, 37vw, 100%);
      font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
}
}




.contentWrapper {
  
     
    section {

      
    }
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {

}
`;

