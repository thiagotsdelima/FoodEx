import styled from 'styled-components';

export const Container = styled.header`
grid-area: header;
height: 10.5rem;
width: 100%;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
display:flex;
justify-content: space-between;
padding: 0 11.3rem;

@media (min-width: 360px) {
grid-area: header;
height: 11.4rem;
width: 100%;
}
`;