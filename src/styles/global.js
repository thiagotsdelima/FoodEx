import { createGlobalStyle } from 'styled-components';

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
  font-size: 62.5%; /* 10px */
  scroll-behavior: smooth;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
}

body, button, input, textarea, html {
  font-family: var(--ff-primary);
  font-size: 1.6rem;
  outline: none;
  overflow-x: hidden;
}

a {
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