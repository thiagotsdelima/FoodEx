import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
	justify-content: space-around;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  
  gap: 55rem;
  
 
  #logo {
    display: flex;
    align-items: center;
    
    
    gap: 10px; 

    img {
      height: 2.9rem; 
    }

    p {
      color: ${({ theme }) => theme.FONTS.RobotoBiggerBold};
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }

  footer.container {
    display: flex;
    align-items: center;
    
   
    
    p {
      color: ${({ theme }) => theme.FONTS.RobotoSmallerRegular};
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  
  @media (max-width: 376px) {

    #logo {
      
    }

    footer.container {
      p {
        
      }
    }
  }
`;