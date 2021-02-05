import React from 'react';

import {
  Avatar,
  Grid,
  Typography
} from '@material-ui/core';
import defaultIcon from '../../assets/images/brute.svg';

const BasicInfo = props => {
  let {
    name,
    imageUri,
    level,
    experience,
    gil
  } = props.props;

  return (
    <Grid container item>
      <Grid item xs={6}>
        <Avatar alt={name ? name : "Unknown Creature"} src={imageUri ? imageUri : defaultIcon} />
      </Grid>
      <Grid container item xs={6}>
        <Grid item xs={12}>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Level: {level}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Exp: {experience}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Gil: {gil}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BasicInfo;
