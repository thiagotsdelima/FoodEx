import styled from 'styled-components';

export const Container = styled.div`
  width: 63rem;
  background-color: ${({ theme }) => theme.COLORS.BACKDROUND_400};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;

  > input {
    height: 5.6rem;
    width: 100%;
    padding: 0 1.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_500}; 
    background: transparent;

    &::placeholder { 
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_400}; 
    }
  }

  svg {
    margin-left: 2rem;
    background: transparent;
    color: ${({ theme }) => theme.FONTS.Poppins100Medium}; 
  }
`;