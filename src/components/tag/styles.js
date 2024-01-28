import styled from 'styled-components';

export const Container = styled.div`
padding: .5rem 1.4rem;
border-radius: .5rem;
margin-right: .6rem;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};
`;