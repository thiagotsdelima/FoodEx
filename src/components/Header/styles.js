import styled from 'styled-components';

export const Container = styled.header`

grid-area: header;

width: 100%;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display:flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5rem;

  img {
    margin-right: 8px;
  }

.inputIcon {
    position: absolute;
    font-size: 1.8rem;
    margin-top: 1.9rem;
    left: 32%; 
    transform: translate(-50%, -50%);
    @media (max-width: 376px) {
    display: none;

    }
  }
  @media (max-width: 768px) {
    
    Input {
    display: none;
  }
  }
  @media (max-width: 376px) {
    height: 11.4rem;
  }

`;

export const Found = styled.div`
display: flex;
align-items: center; 



  img {
    
    height: 3rem;
    width: 3rem;
    
  }

  h1 {
    
    color: ${({ theme }) => theme.FONTS.RobotoBiggerBold};
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    
  }
  @media (max-width: 376px) {
    display:flex;
    justify-content: space-between;
   
    grid-area: header;
    align-items: center;
    
    width: 0;
    img {
      height: 2.4rem;
      position: fixed;
      margin-left: 30px;
      z-index: 1;
    }

    h1 {
      
      margin-left: 70px;
      white-space: nowrap;
      
      right: 0;
      bottom: 0;
      
      z-index: 1;
    }
  }
  

`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;
  margin-bottom: 1.3rem;

  a {
    font-size: 3.2rem;
    display: flex;
    align-items: center;
    margin-top: 1.3rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
   }

    button {
      
      display: flex;
      align-items: center;
      justify-content: center;
      
      height: 5.3rem;
      width: 21.6rem;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      color: ${({ theme }) => theme.FONTS.Poppins100Medium}
    }
    @media (max-width: 768px) {
   
    button, a {
    display: none;
   }
    }
  `;

export const MobileIcon = styled.div`
  @media (min-width: 768px){
   display: none; 

    &:hover, &:focus {
       
    }
  }

  @media (max-width: 376px) {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    a:hover, a:focus {
      
    }
  }
`;

export const MobileStar = styled.div`
@media (min-width: 768px){
   display: none; 

    &:hover, &:focus {
       
    }
  }
  @media (max-width: 370px) {
    display: block; 
    display: flex;
    align-items: center;
    height: 3.2rem;
    margin-left: 2rem;
    a:hover, a:focus {
     
    }
  }
  `;

