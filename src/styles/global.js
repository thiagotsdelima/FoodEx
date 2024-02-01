import { createGlobalStyle } from 'styled-components';
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
* {
padding: 0;
margin: 0;
box-sizing: border-box;

-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

font: inherit;
}

:root {
  --ff-primary: 'Poppins', sans-serif;
  --ff-secondary: 'Roboto', sans-serif;
  --ff-tertiary: 'DM Sans', sans-serif;
  font-size: 16px; 
  scroll-behavior: smooth;

  @media (max-width: ${DEVICE_BREAKPOINTS}) {
    font-size: 12px;
    ::-webkit-scrollbar{
      width: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.COLORS.BACKGRAOUND_400};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.BACKGRAOUND_1000};
    }
  }
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
}

body, button, input, textarea, html {
  font-family: var(--ff-primary);
  font-size: 1rem;
  outline: none;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}
`;