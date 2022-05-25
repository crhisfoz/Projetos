import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/Router'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
          <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);