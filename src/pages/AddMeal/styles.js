import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

`;

export const Content = styled.div`


`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 0 2rem; 
  margin: 3.2rem auto 0;
  max-width: 1120px;
  
  
  Section {
    margin-top: .5rem;
    
    margin-left: -.5rem;
  }
  .submitButton{
    margin: 1.5rem 3.2rem 8.13rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  .submitButton:hover{
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
   margin-top: -2rem;
 
   .inputName, .inputPrice {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
   }
   .inputName {
    width: 458px;
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
      label {
      
      }
      ::placeholder {

      }
    }

  .formRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  
    #seasoningLabel{
      

      fieldset {
       
      }   
    }
    #image{
    display: none;
  }
    .formInputs {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 28rem;
      height: 3.rem;
    
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
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 0.5rem;
    
    svg{
      zoom:0.73; 
    }
    .formIcon {
      margin: 0.75rem 0.5rem 0.75rem 1rem;
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
   width: 334px;
  }
  
  }


`;
