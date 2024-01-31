import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none; 
  }

`;
