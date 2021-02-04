import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import Compendium from './pages/Compendium';
import MonsterBuilder from './pages/MonsterBuilder';
import MonsterDetails from './pages/MonsterDetails';

const Router = props => {
  return (
    <Switch>
      <Route path='/builder' exact component={MonsterBuilder} />
      <Route path='/details' component={MonsterDetails} />
      <Route path='/' exact component={Compendium} />
      <Route path='*' render={() => (<Typography variant="h2">Page not found.</Typography>)} />
    </Switch>
  )
};

export default Router;
