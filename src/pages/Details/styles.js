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

   p {
    text-align: left;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONTS.Poppins300Regular};
  
}


 p:nth-of-type(2) {
 display: none;
}

.request strong,
.request p {  
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




.mealsCustomStyle .content .request {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  width: 687px;
  gap: 1.5rem; 
 
  p {
    text-align: left;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONTS.Poppins300Regular};
  
}


 p:nth-of-type(2) {
 display: none;
}

.request strong,
.request p {  
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
    display: flex;
    justify-content: space-between; /* Ajustado para manter o espaço entre os elementos */
    align-items: center; /* Alinha os itens verticalmente ao centro */
    flex-wrap: wrap; /* Permite que os itens se ajustem conforme a largura do contêiner */
    gap: 2rem;
    margin-left: -3.5rem;
  .buttonInclude {
   
   margin-left: 0;
   width: 10.4rem;
    
  
  }}
  
}

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
 
  .mealsCustomStyle .request .menuAdmin,
  .mealsCustomStyle .content .request {
    margin: 0 5rem;
    width: 100%;
    width: calc(100% - 10rem);
    text-align: center;
    margin-left: 60px;
    width: 100%;
  }
 
  .mealsCustomStyle .mealPhotoContainer img {
    
    margin-top: -2rem;
    width: 14rem;
    height: 14rem;
    margin-right: -.2rem;
  }
 
  .mealsCustomStyle .request .menuAdmin strong,
  .mealsCustomStyle .content .request strong {
    margin: -1rem 0; /* Ajuste conforme necessário */
    align-self: center; 
    font-size: 1.4rem;
    white-space: nowrap;
   
  }

  .mealsCustomStyle .request .menuAdmin p,
  .mealsCustomStyle .content .request p {
    margin-top: 1.5rem;
    margin-bottom: -1rem;
    display: block;
    font-size: 0.8rem;
    text-align: center;
  }

  .mealsCustomStyle .seasoningWrapper {
    margin-left: 1rem;
  }

  .mealsCustomStyle .amount {
    margin: 0 3rem;
   
  }

  .mealsCustomStyle .buttonInclude {
    margin-top: -75px;
    margin-right: -20rem;
    
  }
  

}
`;

export const ButtonBackWrapper = styled.div`
  margin-top: -24px; 
  margin-left: 122px;
 
`;