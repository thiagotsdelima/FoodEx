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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
   
    a:hover, a:focus {
      
    }
  }
`;

export const MobileStar = styled.div`
  margin-left: 1rem;
  font-size: .5rem;
  
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
   display: none; 

    &:hover, &:focus {
       
    }
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
