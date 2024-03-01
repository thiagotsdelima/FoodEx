import styled from "styled-components";

export const Container = styled.div`
  
  padding: 7px 14px;
  margin: 0.50px 8px;  
  width: 20%;
  display: flex;
  flex-direction: row;
  background-color: ${({theme, $isNew}) => $isNew ? 'transparent' : theme.COLORS.GRAY_600};  
  border: ${({theme, $isNew}) => $isNew ? `1px dashed ${theme.COLORS.GRAY_500}` : 'none'};
  border-radius: 8px;
  gap: 8px;


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

svg {
  margin-right: 10px; 
  transform: translateY(-1px); 
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