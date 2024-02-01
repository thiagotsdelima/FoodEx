import styled from 'styled-components';

export const Container = styled.div`
  > input {
    border: none;
    border-bottom-style: none;
    border-bottom-color: none;
    border-radius: 0.3125rem;
    height: 3.125rem;
    width: 100%;
    padding: 0 8.25rem;
    color: ${({ theme }) => theme.FONTS.RobotoSmallRegular};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    &::placeholder { 
      color: ${({ theme }) => theme.FONTS.RobotoSmallRegular}; 
      width: 100vh;
      color: ${({ theme }) => theme.COLORS.GRAY_400}; 
    }
  }

  
`;