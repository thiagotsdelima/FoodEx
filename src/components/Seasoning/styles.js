import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
max-width: fit-content;
padding: .5rem 1.4rem;
border-radius: .5rem;
margin-right: .6rem;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
font-family: ${({ theme }) => theme.FONTS.Poppins100Medium};
@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {

}
`;

export const SeasoningBox = styled.div`
 
`;