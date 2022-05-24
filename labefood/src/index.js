import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/router';
import GlobalState from './Context/GlobalState/GlobalState'
import GlobalOrder from './Context/OrderContent/GlobalOrder'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalOrder>
        <GlobalState>
          <Router />
        </GlobalState>
      </GlobalOrder>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);