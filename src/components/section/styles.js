import styled from 'styled-components';

export const Container = styled.section`
  margin: 2.8rem 0;

> h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-family: ${({ theme }) => theme.FONTS.Poppins400Medium};
 
  
  
  margin-bottom: 1rem;

  border-bottom-width: none;
  border-bottom-style: none;
  border-bottom-color: none;

  padding: 1.0rem;
}
`;