import React, { Component } from 'react';
import {
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@material-ui/core';

class MonsterBuilder extends Component {
  constructor(props) {
    super(props);

    this.handleHPBaseChange = this.handleHPBaseChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleMPBaseChange = this.handleMPBaseChange.bind(this);
    this.handleMonsterTypeChange = this.handleMonsterTypeChange.bind(this);

    this.state = {
      experience: 40,
      gil: 15,
      level: 1,
      mosterType: 'regular',
      strength: 1,
      vitality: 1,
      agility: 1,
      speed: 1,
      magic: 1,
      spirit: 1,
      hpBase: 2,
      mpBase: 0,
      armorBase: 1,
      mArmorBase: 1
    };
  }

  handleMonsterTypeChange(event) {
    this.setState({ monsterType: event.target.value });
  }

  handleLevelChange(event) {
    this.setState({ level: event.target.value });
  }

  handleHPBaseChange(event) {
    this.setState({ hpBase: Number(event.target.value) });
    console.log(this.state);
  }

  handleMPBaseChange(event) {
    this.setState({ mpBase: Number(event.target.value) });
  }

  calculateExperience() {
    let baseExperience = 0;

    switch(this.state.monsterType) {
      case 'notorious': baseExperience += 100; break;
      case 'boss': baseExperience += 225; break;
      case 'endBoss': baseExperience += 350; break;
      default: baseExperience += 40; break;
    }

    switch(this.state.hpBase) {
      case 1: baseExperience -= 16; break;
      case 1.5: baseExperience -= 8; break;
      case 4: baseExperience += 18; break;
      case 6: baseExperience += 40; break;
      case 8: baseExperience += 60; break;
    }

    switch(this.state.mpBase) {
      case 0.5: baseExperience += 8; break;
      case 1: baseExperience += 15; break;
      case 1.5: baseExperience += 22; break;
      case 2: baseExperience += 35; break;
      case 4: baseExperience += 50; break;
    }

    return baseExperience * this.state.level;
  }

  calculateGil() {
    let baseGil = 0;

    switch(this.state.monsterType) {
      case 'notorious': baseGil += 25; break;
      case 'boss': baseGil += 55; break;
      case 'endBoss': baseGil += 90; break;
      default: baseGil += 15; break;
    }

    switch(this.state.hpBase) {
      case 1: baseGil -= 6; break;
      case 1.5: baseGil -= 3; break;
      case 4: baseGil += 8; break;
      case 6: baseGil += 19; break;
      case 8: baseGil += 30; break;
    }

    switch(this.state.mpBase) {
      case 0.5: baseGil += 3; break;
      case 1: baseGil += 7; break;
      case 1.5: baseGil += 10; break;
      case 2: baseGil += 16; break;
      case 4: baseGil += 28; break;
    }

    return baseGil * this.state.level;
  }

  render() {
    let totalExp = this.calculateExperience();
    let totalGil = this.calculateGil();


    return (
      <div>
        <Typography>Experience: {totalExp}</Typography>
        <Typography>Gil: {totalGil}</Typography>
        <InputLabel id="monsterTypeLabel">Monster Type</InputLabel>
        <Select labelId="monsterTypeLabel" id="monsterTypeSelect" defaultValue="regular" onChange={this.handleMonsterTypeChange}>
          <MenuItem value="regular">Regular</MenuItem>
          <MenuItem value="notorious">Notorious</MenuItem>
          <MenuItem value="boss">Boss</MenuItem>
          <MenuItem value="endBoss">End Boss</MenuItem>
        </Select>
        <InputLabel id="levelLabel">Level</InputLabel>
        <Input
          id="levelInput"
          labelId="levelLabel"
          defaultValue={this.state.level}
          inputProps={{ min: 1, max: 100 }}
          onChange={this.handleLevelChange}
          type="number" />
        <Typography id="attributesLabel">Attribues ({35 + this.state.level})</Typography>
        <InputLabel id="hpBaseLabel">Hit Point Base</InputLabel>
        <Select labelId="hpBaseLabel" id="hpBaseSelect" defaultValue="2" onChange={this.handleHPBaseChange}>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="1.5">1.5</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="8">8</MenuItem>
        </Select>
        <InputLabel id="mpBaseLabel">Magic Point Base</InputLabel>
        <Select id="mpBaseSelect" labelId="mpBaseLabel" defaultValue="0" onChange={this.handleMPBaseChange}>
          <MenuItem value="0">---</MenuItem>
          <MenuItem value="0.5">0.5</MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="1.5">1.5</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>
      </div>
    )
  }
}

export default MonsterBuilder;
