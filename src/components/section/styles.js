import styled from 'styled-components';

export const Container = styled.section`
  margin: 2.8rem 0;

> h2 {
  ${({theme }) => theme.FONTS.POPPINS};
  color: ${({theme }) => theme.COLORS.GRAY_300};
  font-size: 1.5rem;
  
  font-weight: 500;
  margin-bottom: 1rem;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({theme }) => theme.COLORS.BACKGROUND_1000};

  padding: 1.0rem;
}
`;