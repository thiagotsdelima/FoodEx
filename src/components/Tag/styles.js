import styled from "styled-components";

export const Container = styled.div`
  
  padding: 0.4rem 0.8rem;
  margin: 0.25rem 0.5rem;  
  width: 30%;
  display: flex;
  flex-direction: row;
  background-color: ${({theme, $isNew}) => $isNew ? 'transparent' : theme.COLORS.GRAY_600};  
  border: ${({theme, $isNew}) => $isNew ? `1px dashed ${theme.COLORS.GRAY_500}` : 'none'};
  border-radius: 0.5rem;
  gap: 0.5rem;
  
  
  input{
    color: ${({theme, $isNew}) => $isNew ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_100};
    background: transparent;
    border: none;
    outline: unset;
    font-family: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
   
  }  

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_500}; 
    
  }

  button{    
    border: none;
    background: none;  
   
 
  }

  .button-delete{
    color: ${({ theme }) => theme.COLORS.TOMATO_300}; 
  
  }

  .button-add{
    color: green; 

  }`
  ;