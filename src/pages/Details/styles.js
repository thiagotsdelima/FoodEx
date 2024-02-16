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

#wrapperTag {
  display: flex;
	justify-content: center;
  font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  height: 3.2rem;
  width: 6.9rem;
}
.meals-custom-style {
  
}
.meals-custom-style .main {
  border: none; 
  background: transparent; 
  padding: 0; 
  
}

.meals-custom-style .request strong {
 
  font-size: 2rem; 
  color: #333; 
  cursor: pointer; 
}

.meals-custom-style .mealPhotoContainer img {
  width: 100px; 
  height: auto; 
  border-radius: 50%; 
}


@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {

}
`;

export const ButtonBackWrapper = styled.div`
  margin-top: -24px; 
  margin-left: 122px;
`;