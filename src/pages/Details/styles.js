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
.request .seasoningWrapper {
  margin-left: -23px;
}

.main, #meal {
gap: 2.95rem;

}
.mealsCustomStyle {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha todos os itens filhos à esquerda */
  width: 100%; /* Assume a largura total do viewport ou do container pai */
  padding: 20px; /* Ajuste conforme necessário */

}

.mealsCustomStyle .main {
  margin-top: 42px;
  margin-bottom: 155px;
  display: flex;
  align-items: center;

  border: none; 
  background: transparent; 
  .likeIcon {
    display: none;
  }
  

}

.mealsCustomStyle .mealPhotoContainer img {
  width: 24.4rem;
  height: 24.3rem;
  margin-left: 7rem;
}

.mealsCustomStyle .request .menuAdmin {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  width: 687px;
  gap: 1.5rem; 
  margin-top: -80px;

   p:first-of-type {
    text-align: left;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONTS.Poppins300Regular};
  
}


 p:nth-of-type(2) {
 display: none;
}

.request strong,
.request p,
strong {  
  margin: 0;
  font-family: ${({ theme }) => theme.FONTS.Poppins500Medium};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  white-space: nowrap;
  
  margin-bottom: 1.5rem;
  .arrowSymbol {
    display: none;
  }
  
}


.StyleClick {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};
    margin-left: -283px;
    .adminActionButton {
      height: 3rem;
      width: 8rem;
    }

      .adminActionButton:active {
        background-color:  ${({ theme }) => theme.COLORS.TOMATO_400};
      }
   
  }


}


@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {

}

.mealsCustomStyle .content .request {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  width: 687px;
  gap: 1.5rem; 
 

  p:first-of-type {
    text-align: left;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONTS.Poppins300Regular};
  
}


 p:nth-of-type(2) {
 display: none;
}

.request strong,
.request p,
strong {  
  margin: 0;
  font-family: ${({ theme }) => theme.FONTS.Poppins500Medium};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  white-space: nowrap;
  
  margin-bottom: 1.5rem;
  .arrowSymbol {
    display: none;
  }
  
}


.StyleClick {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};
    margin-left: -283px;
    .adminActionButton {
      height: 3rem;
      width: 8rem;
    }

      .adminActionButton:active {
        background-color:  ${({ theme }) => theme.COLORS.TOMATO_400};
      }
   
  }
  .wrapperAmountInclude {
  margin-left: -51px;
  gap: 2.1rem;
  
  .buttonInclude {
   
   margin-left: 0;
   width: 10.4rem;
    
  
  }}
}

`;

export const ButtonBackWrapper = styled.div`
  margin-top: -24px; 
  margin-left: 122px;
`;