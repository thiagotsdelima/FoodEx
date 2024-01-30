import styled from 'styled-components';

export const Container = styled.header`

  position: sticky;
  top: 0;
  

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
    
    .inputIcon {
      display: none;
    }
    Input {
    display: none;
  }
  
  }
  @media (max-width: 376px) {
    
    .inputIcon {
      display: none;
    }
  }

`;

export const Found = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  

  img {
    
    height: 3rem;
    width: 3rem;
    
  }

  h1 {
    
    font-family: ${({ theme }) => theme.FONTS.RobotoBiggerBold};
  }
  
  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0 2rem; 
    
  }
  @media (max-width: 376px) {
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
  font-size: 2rem;
  @media (min-width: 768px){
   display: none; 
   
    &:hover, &:focus {
       
    }
  }

  @media (max-width: 376px) {
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
  margin-left: 3.9rem;
  font-size: 2rem;
  margin-top: 4rem;
  
@media (min-width: 768px){
   display: none; 

    &:hover, &:focus {
       
    }
  }
  @media (max-width: 376px) {
    
    a:hover, a:focus {
     
    }
  }
  `;

