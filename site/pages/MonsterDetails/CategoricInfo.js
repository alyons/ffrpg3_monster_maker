import React from 'react';

import {
  Grid,
  Typography
} from '@material-ui/core';

const CategoricInfo = (props) => {
  let {
    category,
    family,
    location,
    intelligence,
    reaction,
    frequency
  } = props.props;

  return (
    <Grid container item>
      <Grid item xs={4}>
        <Typography>Category: {category}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Family: {family}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Location: {location}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Intelligence: {intelligence}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Reaction: {reaction}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Frequency: {frequency}</Typography>
      </Grid>
    </Grid>
  );
};

export default CategoricInfo;
