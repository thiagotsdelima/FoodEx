import styled from 'styled-components';

export const Container = styled.header`

grid-area: header;
height: 10.5rem;
width: 100%;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display:flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5.9rem;

.inputIcon {
    position: absolute;
    font-size: 1.8rem;
    margin-top: 1.9rem;
    left: 34%; 
    transform: translate(-50%, -50%);
  }


@media (max-width: 768px) {
    padding: 0 2rem; 
    height: auto; 
Input {
    display: none;
}
  }
@media (max-width: 370px) {
grid-area: header;
height: 11.4rem;
width: 100%;
Input {
    display: none;
}
}
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  a {
    display: flex;
    align-items: center;
    font-size: 3.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
   }

    button {
      height: 5.6rem;
      width: 21.6rem;
      color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
  `;

export const MobileIcon = styled.div`
  display: none; 

  @media (max-width: 767px) {
    display: block; 

    a:hover, a:focus {
      
    }
  }
`;

export const MobileStar = styled.div`
  display: none; 

  @media (max-width: 767px) {
    display: block; 
    a:hover, a:focus {
     
    }
  }
  `;

export const Search = styled.div`
display: flex;
align-items: center; 


a {
  display: flex;
  align-items: center; 
  color: ${({ theme }) => theme.COLORS.GRAY_100};
}
  img {
    width: 40px; 
   
  }

  h1 {
    
    color: ${({ theme }) => theme.FONTS.RobotoBiggerBold};
  }

`;