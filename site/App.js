import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Router from './Router';

const App = props => {
  const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

  const updateWindowDimensions = () => {
    setDimensions({width: window.innerWidth, height: window.innerHeight});
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  });

  return (
    <>
      <BrowserRouter>
        <Header dimensions={dimensions} />
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
