import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/Router'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'
import { GlobalState } from "./global/GlobalState"


ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalState>
  </React.StrictMode>,
  document.getElementById('root')
);