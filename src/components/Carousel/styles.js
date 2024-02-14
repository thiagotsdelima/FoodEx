import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
 

.carouselContainer {
  -ms-overflow-style: none; 
  scrollbar-width: none;
  position: relative;
 
}

.carousel {
  
  
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
 
 
  
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carouselItem {
 
}

button {
 
}

button:hover {
background-color: #f0f0f0;
}

.carouselContainer > button:first-of-type {
left: 0.6rem;
}

.carouselContainer > button:last-of-type {
right: 0.6rem;
}


@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  .carouselItem {
    width: 90%;
  }

  .carousel {
    justify-content: center;
  }

  button {
    display: none; 
  }
}
`;