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
  padding: 0 2rem; /* Ajuste conforme necessário */
  margin: 3.2rem auto 0;
  max-width: 1120px;
  .contentArea {
   
    
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .formRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    .formInputs {
      flex: 1;
      display: flex;
      flex-direction: column;
      &:not(:last-child) {
        margin-right: 1rem; 
      }
    }
  }

  .upload {
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 0.5rem;

    .formIcon {
      margin: 0.75rem 0.5rem 0.75rem 1rem;
      width: 2.5rem;
      height: 2.5rem;
      transform: rotate(-90deg);
      cursor: pointer;
    }
  }
  
  select {
      width: 100%;
     
      font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
      
      height: 3rem;
      padding: 0.75rem 0.875rem;
      border: none;
      border-radius: 0.5rem;     
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};    
      color: ${({ theme }) => theme.COLORS.GRAY_500};      
    }  
    .uploadText {
    font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};  
    color: ${({ theme }) => theme.COLORS.GRAY_100};  
    line-height: 1.5rem;
    white-space: nowrap;
    cursor: pointer;
  }
  #image{
    display: none;
  }
    #seasoningLabel{
      font-size: 1rem; 

      fieldset {
        width: 22.75rem; 
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
      display: flex;
      height: 10.75rem;
      padding: 0.875rem;
      align-items: flex-start;
      gap: 0.875rem;
      align-self: stretch;
      border: none;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
    }

 
    .submitButton{
    margin: 1.5rem 3.2rem 8.13rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  .submitButton:hover{
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }
`;


/*main{
  

  
    grid-area: content;
    overflow-y: auto;

  }

    .upload{
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 0.5rem;    

    .formIcon{
      margin: 0.75rem 0.5rem 0.75rem 1rem;
      width: 2.5rem;
      height: 2.5rem;
      transform: rotate(-90deg);
      cursor: pointer;
      
    }
  }
  .uploadText {
    ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    white-space: nowrap;
    cursor: pointer;
  }

  #image{
    display: none;
  }

    form {
    width: 70rem;   
    height: 31.3rem;
    display: flex;
    flex-direction: column;  
    gap: 1.5rem;
    margin: auto 3.2rem;
    svg{
      zoom:0.73; 
    }
    p {     
      font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

    input{
      width: 100%;           
    }

    #name, #price {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
    }

  }  

  .formInputs{
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    display: flex;
    flex-direction: column; 
    gap: 1.6rem;

    ::placeholder, #imageInput, #image {
      font-size: 1rem;     
    }
  } 
  select {
      width: 100%;
     
      font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
      
      height: 3rem;
      padding: 0.75rem 0.875rem;
      border: none;
      border-radius: 0.5rem;     
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};    
      color: ${({ theme }) => theme.COLORS.GRAY_500};      
    }  
    #seasoningLabel{
      font-size: 1rem; 

      fieldset {
        width: 22.75rem; 
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
      display: flex;
      height: 10.75rem;
      padding: 0.875rem;
      align-items: flex-start;
      gap: 0.875rem;
      align-self: stretch;
      border: none;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
    }

    #description:invalid{      
      border: 2px solid ${({ theme }) => theme.COLORS.TOMATO_200};
    }
    .submitButton{
    margin: 1.5rem 3.2rem 8.13rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  .submitButton:hover{
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }
*/