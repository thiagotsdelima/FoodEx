import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  


 text-align: end;
 margin-right: 1.7rem; 



  .likeIcon{
  font-size: 1.8rem;
  margin-top: 1rem;
  margin-left: 15.2rem;
  display: flex;
	justify-content: flex-end;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  .editIcon {
    margin-top: 1rem
    
  }

  .main {
   
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_300};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    padding: 0 1rem;
   

   
    .content {
     
      
      strong {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-family: ${({ theme }) => theme.FONTS.Poppins300Bold};
        display: flex;
	      justify-content: center;
        align-items: center;
        margin-bottom: .5rem;
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
      margin-bottom: .5rem;
      }
      p.price {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-family: ${({ theme }) => theme.FONTS.RobotoBiggestRegular};
     
    }
    }
  }
  
  .mealPhotoContainer {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    width: 100%; 
    height: auto; 
    margin: auto; 
    margin-bottom: .5rem;
   
}

.mealPhotoContainer img {
    width: clamp(8.8rem, 16vw, 11rem); 
    height: clamp(8.8rem, 16vw, 11rem); 
    object-fit: cover; 
    transition: transform 0.4s ease-in-out; 

    &:hover {
      transform: scale(1.03); 
    }
}

  

  .wrapperAmountInclude {
    display: flex;
   
    align-items: center;
    
    padding: .3rem 2rem;
    
    .amount {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-family: ${({ theme }) => theme.FONTS.RobotoBigBold};
      margin-left: 1rem;
     
    .AmountControls {
     
    }
      button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        padding: 0.5rem;
        font-size: 1.4rem;
        margin-top: .4rem;
      }
      
      
    }
    .buttonInclude {
        height: 2.8rem;
        width: 5.5rem;
        padding: .8rem auto;
        transition: background-color 0.3s;
        background-color:  ${({ theme }) => theme.COLORS.TOMATO_200};
      }
      .buttonInclude:hover {
        background-color:  ${({ theme }) => theme.COLORS.TOMATO_100};
      }

      .buttonInclude:active {
        background-color:  ${({ theme }) => theme.COLORS.TOMATO_400};
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
