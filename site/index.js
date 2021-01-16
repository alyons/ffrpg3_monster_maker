import React from 'react';
import { render } from 'react-dom';

import App from './App';

render(
  <App />,
  document.getElementById('root') // eslint-disable-line no-undef
);

if (module.hot) module.host.accept(); // eslint-disable-line no-undef
