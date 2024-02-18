import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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



.mealsCustomStyle .mealContainer {

  width: 100%;
  margin-top: 1.3rem;
  margin-bottom: 4.7rem;
 
  .likeIcon {
    display: none;
  }
 
}
.mealsCustomStyle .main {
  margin-top: 42px;
  margin-bottom: 155px;
  display: flex;
  align-items: center;
 
  border: none; 
  background: transparent; 
 
}
.mealsCustomStyle .request {
  margin-left: 3.9rem;
}

.mealsCustomStyle .request strong {
  margin: 2rem 20.0rem auto 0;
  font-family: ${({ theme }) => theme.FONTS.Poppins500Medium};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  white-space: nowrap;
  
  margin-bottom: 1.5rem;
  
  .arrowSymbol {
    display: none;
  }
}

.mealsCustomStyle .request p:first-of-type {
  margin-top: 1.5rem;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONTS.Poppins300Regular};
  
}


.mealsCustomStyle .request p:nth-of-type(2) {
 display: none;
}
.mealsCustomStyle .request .seasoningWrapper {
  margin-left: -22px;
  margin-top: 1.5rem;
}
.mealsCustomStyle .request .wrapperAmountInclude {
  margin-left: -51px;
  gap: 2.1rem;
  margin-top: 2.8rem;
  .buttonInclude {
   
   margin-left: 0;
   width: 10.4rem;
    
  
  }
}

.mealsCustomStyle .mealPhotoContainer img {
  width: 24.4rem;
  height: 24.3rem;
  margin-left: -120px;
}


@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {

}
`;

export const ButtonBackWrapper = styled.div`
  margin-top: -24px; 
  margin-left: 122px;
`;