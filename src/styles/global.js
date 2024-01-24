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

.Poppins-100-medium {
  font-family: var(--ff-primary);
  letter-spacing: 0%;
  font-weight: 500; 
  text-decoration: none; 
  font-size: 14px;
  margin-bottom: 0px; 
  line-height: 24px;
  text-transform: none;
}

.Poppins-200-medium {
  font-family: var(--ff-primary);
  letter-spacing: 0%;
  font-weight: 500;
  text-decoration: none;
  font-size: 20px;
  margin-bottom: 0px;
  line-height: 160%;
  text-transform: none;
}

.Poppins-300-bold {
  font-family: var(--ff-primary);
  letter-spacing: 0%;
  font-weight: 700;
  text-decoration: none;
  font-size: 24px;
  margin-bottom: 0px;
  line-height: 140%;
  text-transform: none;
} 

.Poppins-300-regular {
  font-family: var(--ff-primary);
  letter-spacing: 0%;
  font-weight: 400;
  text-decoration: none;
  font-size: 24px;
  margin-bottom: 0px;
  line-height: 140%;
  text-transform: none;
}

.Poppins-400-medium {
  font-family: var(--ff-primary);
  letter-spacing: 0%;
  font-weight: 500; 
  text-decoration: none; 
  font-size: 32px;
  margin-bottom: 0px; 
  line-height: 140%;
  text-transform: none;
}

.Poppins-500-medium {
  font-family: var(--ff-primary);
  letter-spacing: 0%;
  font-weight: 500; 
  text-decoration: none; 
  font-size: 40px;
  margin-bottom: 0px; 
  line-height: 140%;
  text-transform: none;
}

.Roboto-Smallest-100-regular {
  font-family: var(--ff-secondary);
  letter-spacing: 0%;
  font-weight: 400; 
  text-decoration: none; 
  font-size: 12px;
  margin-bottom: 0px; 
  line-height: 160%;
  text-transform: none;

}

.Roboto-Smallest-200-regular {
  font-family: var(--ff-secondary);
  letter-spacing: 0%;
  font-weight: 400; 
  text-decoration: none; 
  font-size: 14px;
  margin-bottom: 0px; 
  line-height: 160%;
  text-transform: none;
}

.Roboto-Smaller-bold {
  font-family: var(--ff-secondary);
  letter-spacing: 0%;
  font-weight: 700; 
  text-decoration: none; 
  font-size: 14px;
  margin-bottom: 0px; 
  line-height: 160%;
  text-transform: none;
}

.Roboto-Small-spaced {
  font-family: var(--ff-secondary);
  letter-spacing: 0%;
  font-weight: 400; 
  text-decoration: none; 
  font-size: 16px;
  margin-bottom: 0px; 
  line-height: 160%;
  text-transform: none;

}

.Roboto-Small-regular {
  font-family: var(--ff-secondary);
  letter-spacing: 0%;
  font-weight: 400; 
  text-decoration: none; 
  font-size: 16px;
  margin-bottom: 0px; 
  line-height: 100%;
  text-transform: none;
}

.Roboto-Big-bold {
  font-family: var(--ff-secondary);
  letter-spacing: 0%;
  font-weight: 700; 
  text-decoration: none; 
  font-size: 20px;
  margin-bottom: 0px; 
  line-height: 160%;
  text-transform: none;
}

.Roboto-Bigger-bold {
  font-family: var(--ff-secondary);
  letter-spacing: 0%;
  font-weight: 700; 
  text-decoration: none; 
  font-size: 24px;
  margin-bottom: 0px; 
  line-height: Automatic;
  text-transform: none;
}

.Roboto-Biggest-regular {
  font-family: var(--ff-secondary);
  letter-spacing: 0%;
  font-weight: 400; 
  text-decoration: none; 
  font-size: 32px;
  margin-bottom: 0px; 
  line-height: 160%;
  text-transform: none;

}

.Roboto-Giant-bold {
  font-family: var(--ff-secondary);
  letter-spacing: 0%;
  font-weight: 700; 
  text-decoration: none; 
  font-size: 42px;
  margin-bottom: 0px; 
  line-height: Automatic;
  text-transform: none;
}
`;