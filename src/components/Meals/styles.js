import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  
  
  height: auto;

  .main {
    
    
    align-items: center;
    text-align: center;
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_300};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    padding: .5rem 1rem;
    

    .buttonInclud {
    
    background: ${({ theme }) => theme.COLORS.TOMATO_300};
    }
    span img {
     
    }
  }

  .mealPhotoContainer img {
    width: 11rem;
    height: 11rem;
    object-fit: cover;
  }

  .likeIcon, .editIcon {
    > :first-child {
    
  }
    
  }
  

  .wrapperAmountInclude {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    .amount {

      button {

      }
    }
  }

  strong, p {
    
  }

  p.price {
    
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .main {
      width: clamp(21rem, 28vw, 30.4rem);
      height: clamp(30.2rem, 46vw, 46.2rem);
    }
  }
`;
