import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

   @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  .formRow {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 364px;
    margin: 0 auto;
  }

  .formInputs {
    width: 100%; 
  }

  .formInputs label {
    display: block; 
    width: 100%; 
    margin-bottom: 8px; 
  }

  .inputPrice, 
  .formInputs textarea {
    width: 100%; 
  }
  .formRowTag, .formInputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.formInputs {
  margin-bottom: 20px;
}

.formInputs label, .ingredientsLabel {
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
}

.customSelect, #tagBackground, .inputPrice, textarea {
  width: 100%;
  margin-top: 8px;
}


#tagBackground {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ccc; 
  border-radius: 4px;
}


.wrapperButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
}


`;

export const ButtonBackWrapper = styled.div`
@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  margin-top: -24px; 
  margin-left: 122px;
}
`;

export const Content = styled.div`


`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 0 2rem; 
  margin: 3.2rem auto 7rem;
  max-width: 70rem;

  
  Section {
    margin-top: .5rem;
    
    margin-left: -1rem;
  }
  .wrapperButton {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: end; 
  gap: 20px; 
  width: 100%; 
}




.wrapperButton .submitButton, .wrapperButton .submitButtonBlack {
  height: 3rem;
  
  background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
}

.wrapperButton .submitButtonBlack {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
}

.submitButton:hover, .submitButtonBlack:hover {
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
}





`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: -2rem;
   
 
   .inputName, .inputPrice {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
    height: 3rem;
   }
   .inputName {
    width: 27.2rem;
    
   }
   .inputPrice {
    border-radius: .5rem;
   
    height: 3rem;
    margin-top: 1rem;
    &::placeholder {
     
  }
   }

   .formRowTag {
    display: flex;
    justify-content: space-between;
  
    #tagBackground {
        width: 50rem; 
        height: 3rem;
        gap: 1rem;
        display: flex;
        align-items: center;
        border-radius: 0.5rem;  
        border: none;      
        margin-top: 1rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        flex-wrap: wrap;
        
      }
   }

  #description{
      margin-top: 1rem;
      display: flex;
      height: 10.75rem;
      width: 100%;
      padding: 0.875rem;
      align-items: flex-start;
      gap: 0.875rem;
      align-self: stretch;
      border: none;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
    }
     
    }

  .formRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
   

    
    #image{
      opacity: 0;
      position: absolute;
      z-index: -1;
      }
      .uploadLabel  {
      font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};  
      color: ${({ theme }) => theme.COLORS.GRAY_100};  
      cursor: pointer;
    }
      
    .formInputs {
      flex: 1;
      display: flex;
      flex-direction: column;
      
    
      label {
        height: 3rem;
        padding: 0.75rem 0;
        border: none;
        border-radius: 0.5rem;   
        font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
        color: ${({ theme }) => theme.COLORS.GRAY_400};
        
      }
     

      select {
      width: 100%;
     
      font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
      
      height: 3rem;
      padding: 0.75rem 0.875rem;
      border: none;
        
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};    
      color: ${({ theme }) => theme.COLORS.GRAY_500};    
 
    
    }  

      &:not(:last-child) {
      
        
      }
    }
    .formImageUpload {
      width: 13.8rem;
      #imageInput {
      
   
     
      display: block;
      
    }
    
    & > *:first-child {
      margin-bottom: 1rem;
      height: 3rem;
        padding: 0.75rem 0;
        border: none;
        border-radius: 0.5rem;   
        font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
        color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  .upload {
    gap: .5rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 14.3rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 0.5rem;
    
    svg{
      zoom:0.73; 
     
    }
    .formIcon {
      margin-left: 1.5rem;
      width: 2.4rem;
      height: 2.4rem;
      transform: rotate(-90deg);
      cursor: pointer;
    }
  }
  }
 
  .uploadText {
    font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};  
    color: ${({ theme }) => theme.COLORS.GRAY_100};  
    cursor: pointer;
  }
 

 
  .customSelect {
  position: relative;
  display: flex;
  align-items: center;
  
}

.customSelect select {
  -webkit-appearance: none; /* Chrome, Safari */
  -moz-appearance: none;    /* Firefox */
  appearance: none;         /* Remove a seta padrão */
  padding-right: 2rem; /* Espaço para o ícone da seta */
  width: 100%;
  
}

.selectIcon {
  position: absolute;
  right: .6rem; /* Ajuste baseado no seu design */
  pointer-events: none; /* Faz com que o ícone não seja clicável */
  font-size: 1rem; /* Aumenta o tamanho do ícone */
  color: ${({ theme }) => theme.COLORS.GRAY_400};
}


  
  }


`;
