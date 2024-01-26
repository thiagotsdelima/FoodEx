import styled from 'styled-components';

export const Container = styled.div`
  width: 100vh;
  

  > input {
    border-radius: 0.5rem;
    height: 5rem;
    width: 100%;
    padding: 0 11.2rem;
    color: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    &::placeholder { 
      color: ${({ theme }) => theme.FONTS.RobotoSmallRegular}; 
      
      color: ${({ theme }) => theme.COLORS.GRAY_400}; 
    }
  }

  
`;