import React from 'react';
import { AuthProvider } from "./hooks/auth";
import ReactDOM from 'react-dom/client';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import { CartProvider } from './hooks/cart';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
    <CartProvider>
    <Routes />
    </CartProvider>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
