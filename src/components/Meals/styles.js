import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  
  
 
 text-align: end;
 margin-right: 1.7rem; 
 


  .likeIcon{
    position: absolute;
    z-index: 1;
  font-size: 1.8rem;
  margin-top: 1rem;
  margin-left: 2.2rem;
  display: flex;
	justify-content: flex-end;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  .main {
    height: auto;
    width: 19rem;
  
    
   
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_300};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    padding: 0 1rem;
    

    .buttonInclud {
    
    background: ${({ theme }) => theme.COLORS.TOMATO_300};
    }
    .request {
     
      
      strong {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-family: ${({ theme }) => theme.FONTS.Poppins300Bold};
        display: flex;
	      justify-content: center;
        align-items: center;
        margin-bottom: .9rem;
        .arrowSymbol {
          margin-left: .5rem;
          color: ${({ theme }) => theme.COLORS.GRAY_300};
          font-family: ${({ theme }) => theme.FONTS.Poppins300Bold};
        }
      }
      p {
      text-align: center;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
      font-family: ${({ theme }) => theme.FONTS.RobotoSmallerRegular};
      margin-bottom: .9rem;
      }
      p.price {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-family: ${({ theme }) => theme.FONTS.RobotoBiggestRegular};
    
    }
    }
  }
  
  .mealPhotoContainer img {
    width: clamp(8.8rem, 16vw, 17.6rem);
    height: clamp(8.8rem, 16vw, 17.6rem);
    object-fit: cover;
    margin-top: 1.5rem;
    margin-right: 1.7rem;
    margin-bottom: .9rem;
    transition: transform 0.4s ease-in-out;

    &:hover {
      transform: scale(1.03);
    }
  }
  

  .wrapperAmountInclude {
    display: flex;
   
    align-items: center;
    
    padding: .3rem 2rem;
    font-size: 1.5rem;
    .amount {
     margin-left: 1rem;
    .AmountControls {
     
    }
      button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        padding: 0.5rem;
      }
      
    }
  }

 

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .meal {
      width: 100%;
      flex-direction: column;
    }
    .main {
      width: clamp(21rem, 28vw, 30.4rem);
      height: clamp(30.2rem, 46vw, 46.2rem);
    }
  }
`;
