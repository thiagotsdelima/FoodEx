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

.mainDishe, .mainDesserts, .mainDrinks {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    .mainDesserts, .mainDrinks {
      display: block;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .mainDishe {
      display: block;
    }
    .mainDesserts, .mainDrinks {
      display: none;
    }
  }

main {
    
  max-width: 112rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  .MaskGroup2Image {
    display: none;
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    margin-top: -80px;
    padding: 0 1rem;
    max-width: 27rem;

    .maskGroupImage {
    display: none;
  }
  .MaskGroup2Image {
    display: block;
  }

  }
 
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex; 
    flex-direction: row; 
    align-items: center;
    justify-content: center; 
    width: 21.9rem;
    height: 7.5rem; 
  

  .image img {
    width: 11.9rem;
    height: 9.31rem;
    margin-left: -40px;
    margin-top: -30px;
  }

  .wrapper {
   
    margin-left: -30px;

        h2, p {
          
            
        }

    h2 {
      white-space: nowrap;
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 4px;
    }
    p {
      font-size: .6rem;
      font-weight: 400;
    }
  }
}

    }


.image img {
margin-left: -5rem;
margin-top: -4.3rem;
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

}

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
 
  .contentWrapper Section {
    margin-top: .5rem;
    h2 {
      font-size: 1.125rem;
    }
    
  }
}
`;

