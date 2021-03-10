import React from 'react';

import { Grid, Typography } from '@material-ui/core';

const TYPE_HP = new Map([
  ['regular', 1],
  ['notorious', 2],
  ['boss', 4],
  ['endBoss', 6]
]);

const TYPE_MP = new Map([
  ['regular', 1],
  ['notorious', 1.5],
  ['boss', 2],
  ['endBoss', 3]
])

const CombatStats = (props) => {
  let {
    strength,
    vitality,
    agility,
    speed,
    magic,
    spirit
  } = props.props.attributes;

  let {
    hitPointBase,
    magicPointBase,
    level,
    type,
    armorBase,
    magicArmorBase
  } = props.props;

  return (
    <Grid container item xs={12}>
      <Grid item xs={4}>
        <Typography>Strength: {strength}</Typography>
        <Typography>Vitality: {vitality}</Typography>
        <Typography>Agility: {agility}</Typography>
        <Typography>Speed: {speed}</Typography>
        <Typography>Magic: {magic}</Typography>
        <Typography>Spirit: {spirit}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Hit Points: {hitPointBase * vitality * level * TYPE_HP.get(type)}</Typography>
        <Typography>Accuracy: {80 + level + (agility * 2)}</Typography>
        <Typography>Dexterity: {50 + level + (agility * 2)}</Typography>
        <Typography>Amror: {armorBase * level + (vitality / 2)}</Typography>
        <Typography>Evasion: {level + speed + agility}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>Magic Points: {magicPointBase * spirit * level * TYPE_MP.get(type)}</Typography>
        <Typography>Magic Accuracy: {100 + level + (magic * 2)}</Typography>
        <Typography>Mind: {50 + level + (magic * 2)}</Typography>
        <Typography>Magic Armor: {magicArmorBase * level + (spirit / 2)}</Typography>
        <Typography>Magic Evasion: {level + magic + spirit}</Typography>
      </Grid>
    </Grid>
  );
};

export default CombatStats;
