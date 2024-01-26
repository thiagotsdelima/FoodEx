import styled from 'styled-components';

export const Container = styled.div`
width: 63rem;

background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

display: flex;
align-items: center;

border-radius: 1rem;

> input {
  height: 5.6rem;
  width: 100%;

  padding: 0 1.2rem;
  border: 0;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background: transparent;

  &:placeholder {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.FONTS.Poppins100Medium};
  }
}

svg {
  margin-left: 20px;
  background: transparent;
  color: ${({ theme }) => theme.FONTS.Poppins100Medium};
}

`;