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
  
 
  #logoType {
    display: flex;
    align-items: center;
    gap: .6rem; 

    img {
      height: 1.9rem; 
    }

    p {
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

  #logoType {
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
        color: ${({ theme }) => theme.COLORS.GRAY_700};
      }
    }

  footer.container {
    
    p {
      white-space: nowrap;
      margin-left: -13rem;
      margin-top: -.2rem;
      font-weight: 400;
      font-size: .6rem; 
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-family: ${({ theme }) => theme.FONTS.tertiary};
    }
  }
}

`;