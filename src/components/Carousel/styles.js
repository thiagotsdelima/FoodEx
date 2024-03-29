import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`



 .carouselContainer {
  max-width: 70rem;
  max-height: 28.7rem;
  position: relative;
  overflow: hidden; 
  
}
.arrowContainer {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10; 
    font-size: 1.8rem;
  }

  .arrowLeft {
    left: .1rem; 
  }

  .arrowRight {
    right: .1rem; 
  }

.carouselContainer::before,
.carouselContainer::after {
  content: '';
  position: absolute;
  top: calc(50% - 14.45rem); 
  height: 28.9rem; 
  width: 25%; 
  pointer-events: none; 
}


.carouselContainer::before {
  left: 0;
  background: linear-gradient(to right, ${({ theme }) => theme.COLORS.GRADIENTS_100} 0%, transparent 100%);
}

.carouselContainer::after {
  right: 0;
  background: linear-gradient(to left, ${({ theme }) => theme.COLORS.GRADIENTS_100} 0%, transparent 100%);
}


.carousel {
    cursor: grab;
    overflow: hidden;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }

  .carouselItem {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
  }

  .carouselItem:hover {
    position: absolute;
    transform: scale(1.05);
    z-index: 2; 
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); 
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

.carouselContainer > button:first-of-type {
left: 0.6rem;
}

.carouselContainer > button:last-of-type {
right: 0.6rem;
}


@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  .carouselContainer {
    width: 27rem;
    height: 18rem;
 
  }
  .arrowContainer {
    display: none; 
  }
  .carouselContainer::before,
  .carouselContainer::after {
    background: none;
  }
}
`;