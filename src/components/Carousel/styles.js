import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
 max-width: fit-content;
.carouselContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1.25rem 0;
  width: 100%;
  gap: 1.25rem; 
}

.carouselItem {
  flex: 0 0 auto;
  box-shadow: 0 0.3rem 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #fff;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border: none;

padding: 0.6rem;
border-radius: 50%;
box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
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