import styled from 'styled-components';
import {DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.header`
  position: sticky;
  grid-area: header;
  
  height: 6.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display:flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 6.5rem;

  img {
    margin-right: 0.5rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  	display: flex;
	  justify-content: space-between;
    gap: 2rem;
    width: 428px;
    padding: 56px 20px 24px;
  }


`;

export const Found = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  
  gap: 0.625rem;
  img {
   
    height: 1.875rem;
    width: 1.875rem;
    
  }

  h1 {
    
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: ${({ theme }) => theme.FONTS.RobotoBiggerBold};
  }
  
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  

    
    
    img {
    height: 1.8rem;
    width: 1.4rem;
    margin-left: .8rem;
    }

    h1 {
     
      white-space: nowrap;
      font-size: 1.3rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-weight: 700;
    }
  }
  

`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.75rem;
  margin-bottom: 1.3rem;
  
  
  a {
    
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-top: 1.3rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
   }

    button {
      
      display: flex;
      align-items: center;
      justify-content: center;
      
      height: 3.3125rem;
      width: 13.3rem;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      color: ${({ theme }) => theme.FONTS.Poppins100Medium}
    }
    a:last-child {
      margin-top: ${({ $isAdmin }) => $isAdmin ? '0' : '25px'}; 
  }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
   
    button, a {
    display: none;
   }
    }
  `;

export const MobileIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
   display: none; 
   
    &:hover, &:focus {
       
    }
  }
`;

export const MobileStar = styled.div`
  margin-top: .4rem;
  margin-left: 1rem;
  font-size: .5rem;
  cursor: pointer;
  position: relative;

  .counter {
    position: absolute;
    top: -8px; // Ajuste conforme necessário
    right: 1px; // Ajuste conforme necessário
    background-color: red;
    color: white;
    font-size: 12px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};
  }
  
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
   display: none; 
  }
  `;

export const InputContainer = styled.div`
  position: relative;
  width: 36.3rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 0.3125rem;
  color: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
  margin-top: ${({ $isAdmin }) => $isAdmin ? '5px' : '0'};
  z-index: 105;
  

  ul {
  list-style-type: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 106;
  transition: opacity 0.5s ease-in-out, max-height 0.5s ease-in-out;
  max-height: 0;
  border-radius: 0 0 0.5rem 0.5rem;
  pointer-events: none;
 
}

ul.visible {
  max-height: 500px; 
  opacity: 1;
  pointer-events: auto;
}

  
  li {
    cursor: pointer;
    text-decoration: none; 
    
    padding: 10px 20px;
    &:hover {

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }

  input {
    width: 100%;
    padding: 0 6.5rem; 
    height: 3.125rem;
    border-radius: 0.3rem;
    border: none;
    background-color: transparent;
    color: inherit;

    
    &::placeholder {
      font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }

  .inputIcon {
    position: absolute;
    font-size: 1.2rem;
    margin-top: 1.6rem;
    left: ${({ $isAdmin }) => $isAdmin ? 'calc(50% - 14.5rem)' : '10%'};
    transform: translate(99%, -50%);
    color: ${({ theme }) => theme.COLORS.GRAY_400};
   
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
    .inputIcon {
      display: none;
    }
    Input {
    display: none;
  }
  
  }
`;

export const AdminTag = styled.div`

 p {
  font-family: ${({ theme }) => theme.FONTS.RobotoSmallestRegular};
 color: ${({ theme }) => theme.COLORS.CAKE_200};
  margin-top: 2.5rem;
  margin-left: -48px;
 }
`;

export const StyledButton = styled.div`
      margin-top: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: .5rem;
      height: 3.3125rem;
      width: 13.3rem;
      background-color:  ${({ theme }) => theme.COLORS.TOMATO_200};
      color: ${({ theme }) => theme.FONTS.Poppins100Medium};
  cursor: pointer;
  transition: background-color 0.3s;
 

  &:hover {
    background-color:  ${({ theme }) => theme.COLORS.TOMATO_100};
  }
  &:active {
    background-color:  ${({ theme }) => theme.COLORS.TOMATO_400};
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none; 
  }

`;

export const Nav = styled.nav`
  position: absolute;
  z-index: 100;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  width: 100%; /* Ajusta a largura para ocupar a largura total */
  top: 0; /* Posiciona o nav no topo do container relativo */
  left: 0; /* Alinha o nav à esquerda do container relativo */
  display: flex;
  flex-direction: column; /* Organiza os elementos internos em coluna */
  padding: 1rem; /* Adiciona um pouco de padding para espaçamento interno */
  align-items: center; /* Centraliza os elementos horizontalmente */
  min-height: 200vh;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  
  header {
    margin-top: -15px; 
    margin-left: -40px;
    width: 100%; 
    display: flex;
    justify-content: space-between;
    padding: 32px 24px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 1.1rem;
  
  }
  header a { /* Assumindo que o Link renderiza um elemento <a> */
  margin-top: 10px;
  margin-left: 10px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100}; /* Exemplo de acesso à cor do tema */
}

  .menuHamburguer {
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  position: relative; /* Essencial para z-index funcionar corretamente */

  input {
    width: 85%; /* Define uma largura para o input */
    padding: 0.5rem 2.8rem; /* Ajusta o padding para não sobrescrever o ícone */
    height: 3.125rem;
    border-radius: 0.3rem;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: inherit;
    margin-top: 20px;

    &::placeholder {
      font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-size: 0.9rem;
    }
 
  }
  ul {
  list-style-type: none;
  position: absolute; /* Posiciona a lista em relação ao seu container pai */
  top: 100%; /* Posiciona a lista logo abaixo do input */
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 106; /* Certifique-se de que este valor é suficientemente alto para sobrepor outros elementos */
  border-radius: 0 0 0.5rem 0.5rem;
  max-height: 0;
  overflow: hidden; /* Esconde o conteúdo que excede o max-height */
  transition: max-height 0.5s ease-in-out;
}

ul.visible {
  max-height: 500px; /* Ajuste conforme necessário */
  opacity: 1; /* Garante que a lista seja visível quando expandida */
  pointer-events: auto; /* Permite interação com os itens da lista */
}

/* Estilização dos itens da lista */
li {
  cursor: pointer;
  padding: 10px 20px;
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
}


    .inputIcon {
    position: absolute;
    font-size: 1.2rem;
    margin-top: 2.8rem;
    left: ${({ $isAdmin }) => $isAdmin ? 'calc(50% - 14.5rem)' : '10%'};
    transform: translate(-130%, -50%);
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
}





  button {
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: transparent;
  border: none; /* Remove a borda geral */
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000}; /* Adiciona borda apenas embaixo */
  padding: 8px 16px; /* Espaçamento interno */
  margin-top: 20px;
  align-self: flex-start; /* Alinha à esquerda */
  width: 335px; /* Define um tamanho específico */
  text-align: left;
  margin-left: .1rem;
}



`;