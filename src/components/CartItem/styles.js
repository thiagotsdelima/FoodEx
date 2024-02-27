import styled from 'styled-components';

export const Container = styled.div`
  .cart-item {
    display: flex;
	  justify-content: space-evenly; // Alinha os itens verticalmente no centro
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
        margin-top: 21px;
      }

  }
`;
