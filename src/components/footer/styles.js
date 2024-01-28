import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  
  padding: 2.4rem 14.8rem;  
  
 
  #logo {
    display: flex;
    align-items: center;
    
    
    gap: 10px; 

    #logo img  {
      height: 2.9rem; 
    }

    #logo p {
      color: ${({ theme }) => theme.FONTS.RobotoBiggerBold};
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }

  footer.container {
    display: flex;
    align-items: center;
    
   
    
    p {
      font-size: ${({ theme }) => theme.FONTS.RobotoSmallerRegular};
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
  
  @media (max-width: 376px) {
  display: flex;
	justify-content: flex-start;
  align-items: center;
  padding: 1.2rem 1rem;
  
  #logo {
    gap: 5px;

    img {
      margin-bottom: .4rem;
      margin-left: .7rem;
      height: 1.5rem;
      
    }

    p {
      margin-bottom: .4rem;
      font-weight: 700;
      font-size: 1.6rem; 
      width: 11.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_700};
      font-family: ${({ theme }) => theme.FONTS.secondary};
    }
  }

  footer.container {
    
    p {
      margin-left: 2.7rem;
      font-weight: 400;
      font-size: 1rem; 
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-family: ${({ theme }) => theme.FONTS.tertiary};
    }
  }
}

`;