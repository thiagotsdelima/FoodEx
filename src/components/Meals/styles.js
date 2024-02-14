import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  
  
  
  
  align-items: center;
 

  margin-right: 1.7rem; 
 


  .likeIcon{
    font-size: 2.4rem;
    display: flex;
    justify-content: flex-end; 
    align-items: end; 
    right: 1.8rem;
    top: 1.6rem;
    animation: zoomIn 1s infinite alternate;
  }

  .main {
    height: 28rem;
    width: 19rem;
    
    
   
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_300};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    padding: .5rem 1rem;
    

    .buttonInclud {
    
    background: ${({ theme }) => theme.COLORS.TOMATO_300};
    }
    .request {
     
      
      strong {
        align-items: center;
        text-align: center;
      }
      p {
      text-align: center;
      }
      p.price {
       
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
    }
  }
  
  .mealPhotoContainer img {
    width: clamp(8.8rem, 16vw, 17.6rem);
    height: clamp(8.8rem, 16vw, 17.6rem);
    object-fit: cover;
   
    transition: transform 0.4s ease-in-out;

    &:hover {
      transform: scale(1.03);
    }
  }
  

  .wrapperAmountInclude {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    .amount {

      button {

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
