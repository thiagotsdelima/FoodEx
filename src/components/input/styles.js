import styled from 'styled-components';

export const Container = styled.div`
  width: 100vh;
 

  > input {
    border: none;
    border-bottom-style: none;
    border-bottom-color: none;
    border-radius: 0.5rem;
    height: 5rem;
    width: 100%;
    padding: 0 13.2rem;
    color: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    &::placeholder { 
      color: ${({ theme }) => theme.FONTS.RobotoSmallRegular}; 
      
      color: ${({ theme }) => theme.COLORS.GRAY_400}; 
    }
  }

  
`;