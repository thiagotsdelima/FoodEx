import React from 'react';
import { AuthProvider } from "./hooks/auth";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <Router />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
