import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';

import App from './app/app';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
