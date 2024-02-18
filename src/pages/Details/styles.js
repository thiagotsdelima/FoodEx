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


.mealsCustomStyle {
  display: flex;
	justify-content: center;
  .likeIcon {
    display: none;
  }
}
.mealsCustomStyle .main {
  display: flex;
  justify-content:space-between;
  border: none; 
  background: transparent; 
  padding: 0; 
  .seasoningWrapper {
  
 
 
}
}

.mealsCustomStyle .request strong {
  font-family: ${({ theme }) => theme.FONTS.Poppins500Medium};
  
  
  .arrowSymbol {
    display: none;
  }
}

.mealsCustomStyle .request p:first-of-type {
  
  color: red;
}


.mealsCustomStyle .request p:nth-of-type(2) {
  
  color: blue; 
}


.mealsCustomStyle .mealPhotoContainer img {
  width: 24.4rem;
  height: 24.3rem;
}


@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {

}
`;

export const ButtonBackWrapper = styled.div`
  margin-top: -24px; 
  margin-left: 122px;
`;