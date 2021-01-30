import React from 'react';

import {
  Typography
} from '@material-ui/core';

const BaseStats = props => {
  return (
    <>
      <Typography variant="h5">Base Stats</Typography>
      <Typography>Type</Typography>
      <Typography>Level</Typography>
      <Typography>Strength</Typography>
      <Typography>Vitality</Typography>
      <Typography>Agility</Typography>
      <Typography>Speed</Typography>
      <Typography>Magic</Typography>
      <Typography>Spirit</Typography>
      <Typography>Hit Points</Typography>
      <Typography>Magic Points</Typography>
      <Typography>Armor</Typography>
      <Typography>Magic Armor</Typography>
      <Typography>Evasion</Typography>
      <Typography>Magic Evasion</Typography>
    </>
  );
};

export default BaseStats;
