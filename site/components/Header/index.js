import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Typography
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import useStyles from './styles';

const Header = props => {
  const classes = useStyles();
  const theme = useTheme();

  const isMobile = false;
  // const isMobile = theme.breakpoints.values.sm >= props.dimensions.width;

  return (
    <div>
      <RouterLink to='/'>
        <Typography variant="h4" className={classes.title} align="center">
          { isMobile ? "FFRPG 3rd Bestiary" : "Final Fantasy RPG 3rd Bestiary" }
        </Typography>
      </RouterLink>
    </div>
  );
};

export default Header;
