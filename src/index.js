import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from 'components/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constans/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
