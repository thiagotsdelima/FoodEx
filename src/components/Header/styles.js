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
    margin: 0 auto;
    padding: 0 1rem; 
    
    img {
    height: 2.8rem;
    width: 2.4rem;
    position: fixed;
    top: 6rem;
    right: 0;
    bottom: 0;
    left: 8.7rem;
    z-index: 1;
    }

    h1 {
      margin-top: 4rem;
      margin-left: 5.9rem;
      white-space: nowrap;
      font-family: ${({ theme }) => theme.FONTS.RobotoBiggerBold};
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
  font-size: 2rem;
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
   display: none; 
   
    &:hover, &:focus {
       
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 1.8rem;
    width: 2.4rem;
    position: fixed;
    top: 6rem;
    right: 0;
    bottom: 0;
    left: 1.6rem;
    z-index: 1;
    a:hover, a:focus {
      
    }
  }
`;

export const MobileStar = styled.div`
  display: flex;
  justify-content: end;
  margin-left: 2.4375rem;
  font-size: 1.3rem;
  margin-top: 2.5rem;
  
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
   display: none; 

    &:hover, &:focus {
       
    }
  }
  `;

export const InputContainer = styled.div`
 
 width: 36.3rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 0.3125rem;
  color: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
 
  margin-top: ${({ $isAdmin }) => $isAdmin ? '5px' : '0'}; 
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
    left: ${({ $isAdmin }) => $isAdmin ? 'calc(50% - 14.5rem)' : '32%'};
    transform: translate(-50%, -50%);
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
 font-family: ${({ theme }) => theme.FONTS.RobotoSmallestRegular};
 color: ${({ theme }) => theme.COLORS.CAKE_200};
 p {
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
`;
