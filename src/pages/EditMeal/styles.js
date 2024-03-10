import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;


`;

export const ButtonBackWrapper = styled.div`
@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  margin-top: -1.5rem; 
  margin-left: 4.62rem;
 
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

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
 
 
  .wrapperButton {
    display: flex;
    justify-content: center;
    margin-bottom: -90px;
  .submitButton {
    padding: 5px 5px;
    font-size: 1rem;
  }
}
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
   
   }

   .formRowTag {
    display: flex;
    justify-content: space-between;
    .ingredientsLabel {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  
    #tagBackground {
  display: flex;
  flex-wrap: wrap; /* Permite que as tags se alinhem em múltiplas linhas conforme necessário */
  justify-content: flex-start; /* Alinha tags ao início */
  padding: 10px; /* Espaçamento interno */
  gap: 10px; /* Espaço entre as tags */
  border-radius: 8px; 
  border: none;  
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  max-width: 50rem; /* Limita o tamanho horizontal */
  min-height: 48px; /* Altura mínima inicial */
  width: auto; 
}
.tagStyle {
  padding-left: .5rem;
  
  
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
    }

    .formImageUpload {
      
      #imageInput {
      display: block;  
    }
    
    .imageInputLabel {
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
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    .uploadTextLabel {
      display: none;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
    .upload {
      width: 314px;
      height: 48px;
      padding: 12px 0 12px 12px;
      .formIcon {
        height: 2rem;
        width: 2rem;
      }
      .uploadLabel {
        display: none;
      }
      .uploadTextLabel {
        font-size: .8rem;
        
      }
     
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
  -webkit-appearance: none; 
  -moz-appearance: none;    
  appearance: none;         
  padding-right: 2rem; 
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
  .priceLabel,
  .descriptionLabel {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {


Section {
h2 {
  font-size: 2rem;
}
}

.formRow {
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
gap: 1.5rem;
}



.formInputs {

.customSelect
 {
    width: 100%; 
    margin: 0 19.6rem; 
}
.inputName {
  width: 314px;
  height: 48px;
}
.inputPrice {
  width: 314px;
  height: 48px;
}
#tagBackground {
  margin-bottom: 1.5rem;
}

}

.customSelect select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: .5rem;
  
  
  &:focus {
    outline: none; 
    border-color: ${({ theme }) => theme.COLORS.PRIMARY}; 
    box-shadow: none; 
  }
}



.formRowTag, .formInputs {
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

}


.formInputs label, .ingredientsLabel {
width: 100%;

margin-bottom: 8px;
color: ${({ theme }) => theme.COLORS.GRAY_400};
}

}`