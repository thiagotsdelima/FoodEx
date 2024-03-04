import styled from 'styled-components';

export const Container = styled.div`
  .cart-item {
    display: flex;
    justify-content: flex-start; 
    align-items: center; 
    gap: 13px;
    
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center; 
      
      h3 {
        
        font-family: ${({ theme }) => theme.FONTS.Poppins200Medium};
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
      
      a {
        font-family: ${({ theme }) => theme.FONTS.RobotoSmallestRegular};
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
        
      }
    }
      p {
        font-family: ${({ theme }) => theme.FONTS.RobotoSmallestRegular};
        color: ${({ theme }) => theme.COLORS.GRAY_400};
       margin-top: -1.3rem;
      }
      img {
      margin-left: 0;
    }

  }
`;
