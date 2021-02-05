import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Grid,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import BasicInfo from './BasicInfo';

import MONSTERS from '../../assets/data/monsters.json';

const styles = theme => ({
  main: {
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    },
    [theme.breakpoints.up('md')]: {
      width: '50%'
    }
  }
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MonsterDetails = props => {
  let query = useQuery();
  const { classes } = props;

  let monster = MONSTERS.find(m => m.name == query.get("name"));
  if (!monster) monster = MONSTERS.find(m => m.name == 'Remora');
  // console.log(monster);

//   <Grid item xs={12}>
//   <Typography>{`This is the detail page for ${query.get("name")}.`}</Typography>
// </Grid>
// <Grid item xs={6}>
//   <Typography>Name: Rhemora</Typography>
// </Grid>
// <Grid item xs={2}>
//   <Typography>Level: 10</Typography>
// </Grid>
// <Grid item xs={2}>
//   <Typography>Exp: 1200</Typography>
// </Grid>
// <Grid item xs={2}>
//   <Typography>Gil: 451</Typography>
// </Grid>

  return (
    <Grid container className={classes.main}>
      <BasicInfo props={monster}/>
    </Grid>
  );
}

export default withStyles(styles, { withTheme: true })(MonsterDetails);
