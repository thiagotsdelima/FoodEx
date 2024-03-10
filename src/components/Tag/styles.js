import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
 
  padding: 5px 5px;
  margin: 8px 8px;  
  width: 140px;
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
   
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 7.37rem;
    padding: .38rem .87rem;
    margin: .40px .43rem;  
   
  }
  `;