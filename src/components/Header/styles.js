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
    left: 34%; 
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
    grid-area: header;
    height: 11.4rem;
    width: 100%;
    padding: 0 1rem;
    h1 {
      width: 0;
      margin: 0;
      padding: 0;
      justify-content: center;
      text-align: center; 
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    img {
      margin: 0;
      padding: 0;
    }
}
`;

export const Found = styled.div`
display: flex;
align-items: center; 


a {
  display: flex;
  align-items: center; 
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  gap: 1rem;
}
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

  @media (max-width: 370px) {
    display: block; 

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

    a:hover, a:focus {
     
    }
  }
  `;

