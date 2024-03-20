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
    max-width: 687px; /* Largura máxima */
    min-height: 68px; /* Altura mínima */
    overflow-wrap: break-word; /* Quebra de palavras para evitar overflow horizontal */
    margin-left: -10px;
    padding: 10px; /* Espaçamento interno para não tocar nas bordas do contêiner */
    box-sizing: border-box; 
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
    max-width: 687px; /* Largura máxima */
    min-height: 68px; /* Altura mínima */
    overflow-wrap: break-word; /* Quebra de palavras para evitar overflow horizontal */
    margin-left: -10px;
    padding: 10px; /* Espaçamento interno para não tocar nas bordas do contêiner */
    box-sizing: border-box; 
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

  .mealsCustomStyle {
    margin: 0 85px 0 85px;
    max-width: 300px;
    word-wrap: break-word;
    text-align: center;
    place-items: center;
    height: 100vh;
}
  .mealsCustomStyle .request .menuAdmin strong,
  .mealsCustomStyle .content .request strong,
  .mealsCustomStyle .request .menuAdmin p,
  .mealsCustomStyle .content .request p {
    max-width: 300px; /* Ajuste a largura máxima conforme necessário */
    word-wrap: break-word; /* Quebra o texto para se manter dentro do limite */
    text-align: center; /* Garante que o texto esteja centralizado */
  }
  
 
  .mealsCustomStyle .request .menuAdmin,
  .mealsCustomStyle .content .request {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 3rem;
   
  }
 
  .mealsCustomStyle .mealPhotoContainer img {
    
    margin-top: -2rem;
    width: 14rem;
    height: 14rem;
    margin-right: 10rem;
  }
 
  .mealsCustomStyle .request .menuAdmin strong,
  .mealsCustomStyle .content .request strong {
    margin: -1rem 0; 
    align-self: center; 
    font-size: 1.4rem;
  
   
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
    margin-left: .5rem;
    width: 23rem;
    margin-left: 3rem;
    
    }

  .mealsCustomStyle .amount {
    margin: 0 3rem;
    margin-left: -5.5rem;
    font-size: 1.5rem;
  }

  .mealsCustomStyle .buttonInclude {
    
    margin-right: -12rem;
    
  }
  .mealsCustomStyle .request .menuAdmin .StyleClick {
    
    margin-right: 40rem;
    }

.mealsCustomStyle .request .menuAdmin .StyleClick .adminActionButton {
  margin-left: auto; 
  margin-right: -268px; 
  width: 300px;
  margin-top: 10px;
    }
}
`;

export const ButtonBackWrapper = styled.div`
  margin-top: -24px; 
  margin-left: 122px;
 
`;