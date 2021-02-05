import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { useDefaultStyles } from '../../styles';
import defaultIcon from '../../assets/images/brute.svg';

const styles = theme => ({
  compendium: {
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    },
    [theme.breakpoints.up('md')]: {
      width: '80%'
    }
  }
});

class Compendium extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        { name: "Remora", level: 10, exp: 1200, gil: 451 },
        { name: "Marlboro", level: 10, exp: 4110, gil: 1250 },
        { name: "Clear Flan", level: 10, exp: 1990, gil: 980 }
      ]
    };
  }

  render() {
    const { classes } = this.props;
    
    return (
      <List className={classes.compendium}>
        {this.state.monsters.map((monster) => (
          <RouterLink to={`/details?name=${monster.name}`} key={monster.name}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt={monster.name ? monster.name : "Unknown Creature"} src={monster.img ? monster.img : defaultIcon} />
              </ListItemAvatar>
              <ListItemText
                primary={monster.name ? monster.name : "Unknown Creature"}
                secondary={`Level: ${monster.level} Exp:${monster.exp} Gil: ${monster.gil}`}/>
            </ListItem>
          </RouterLink>
        ))}
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Compendium);
