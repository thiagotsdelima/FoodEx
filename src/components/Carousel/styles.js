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
  padding: 20px 0;
  width: 100%;
  gap: 20px; /* Espaçamento entre os itens */
}

.carouselItem {
  flex: 0 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
}

.carouselItem img {
  width: 100%;
  height: auto;
  display: block;
}

.carouselItem h3, .carouselItem p, .carouselItem span {
  padding: 10px;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border: none;

padding: 10px;
border-radius: 50%;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button:hover {
background-color: #f0f0f0;
}

.carouselContainer > button:first-of-type {
left: 10px;
}

.carouselContainer > button:last-of-type {
right: 10px;
}


@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
.carouselItem {
width: 90%;
}

css
Copy code
.carousel {
  justify-content: center;
}

button {
  display: none; 
}
}
`;