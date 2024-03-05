import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.footer`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  
  padding: 1.5rem 9.25rem;  
  
 
  #logo {
    display: flex;
    align-items: center;
    gap: .6rem; 

    #logo img  {
      height: 1.9rem; 
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
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  display: flex;
	justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1rem;
  text-align: center;
  #logo {
    gap: 5px;

    img {
      margin-bottom: .4rem;
      margin-left: .7rem;
      height: 1.2rem;
      
    }

    p {
      margin-bottom: 0.25rem;
      font-weight: 700;
      font-size: .8rem; 
      width: 7.125rem;
      color: ${({ theme }) => theme.COLORS.GRAY_700};
      font-family: ${({ theme }) => theme.FONTS.secondary};
    }
  }

  footer.container {
    
    p {
      white-space: nowrap;
      margin-left: -15rem;
      margin-top: -.2rem;
      font-weight: 400;
      font-size: .6rem; 
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-family: ${({ theme }) => theme.FONTS.tertiary};
    }
  }
}

`;