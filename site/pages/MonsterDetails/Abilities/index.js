import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import AbilityItem from './AbilityItem';

const Abilities = (props) => {
  let {
    actionAbilities,
    spells,
    jobAbilities,
    supportAbilities
  } = props.props;

  let actionItems = [];
  
  actionAbilities.forEach(item => {
    actionItems.push(
      <AbilityItem
        key={item.name}
        name={item.name} />
    );
  });

  return (
    <Grid>
      <Typography variant="h4">Abilities</Typography>
      <Typography variant="h5">Action Abilities</Typography>
      <div>{actionItems}</div>
    </Grid>
  );
};

export default Abilities;
