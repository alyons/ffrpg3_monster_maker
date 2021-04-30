import React, { Component, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import firebase from 'firebase/app';

import {
  Avatar,
  Button,
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
import AttackService from '../../services/AttackService';

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

export default function AttackCompendium() {
  const [attacks, setAttacks] = useState([]);

  const onDataChange = (items) => {
    let attacks = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      attacks.push({
        key,
        data
      });
    });

    console.log(attacks);
    setAttacks(attacks);
  }

  useEffect(() => {
    AttackService.getAll().on("value", onDataChange);

    return () => {
      AttackService.getAll().off("value", onDataChange);
    }
  }, []);

  return (
    <div>
      <RouterLink to='/attacks/builder'><Button>Create Attack</Button></RouterLink>
      <List>
        {attacks.map((attack, index) => (
          <ListItem key={index}><ListItemText primary={attack.data.name} /></ListItem>
        ))}
      </List>
    </div>
  )
};
