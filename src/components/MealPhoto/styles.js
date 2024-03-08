import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const Container = styled.div`

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: ${({ $isAdmin }) => $isAdmin ? '5rem' : '0'};
  }
`;