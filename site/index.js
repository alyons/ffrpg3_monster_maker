import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { render } from 'react-dom';

import App from './App';
import createTheme from './theme';

const theme = createTheme();

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root') // eslint-disable-line no-undef
);

if (module.hot) module.host.accept(); // eslint-disable-line no-undef
