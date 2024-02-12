import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  gap: 1.7rem;

  .main {
    
    width: ${({ $user }) => $user === false ? "clamp(21rem, 30vw, 25.4rem)" : "clamp(21rem, 38vw, 25.4rem)"};
    height: clamp(30.2rem, 50vw, 40.2rem);
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_300};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    gap: 1rem;
    padding: 20px;

    .buttonInclud {
    
    background: ${({ theme }) => theme.COLORS.TOMATO_300};
    }
    span img {
     
    }
  }

  .mealPhotoContainer img {
    width: 50%;
    height: auto;
    object-fit: cover;
      
  }

  .likeIcon, .editIcon {
   
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
    text-align: center;
  }

  p.price {
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .main {
      width: clamp(21rem, 28vw, 30.4rem);
      height: clamp(30.2rem, 46vw, 46.2rem);
    }
  }
`;
