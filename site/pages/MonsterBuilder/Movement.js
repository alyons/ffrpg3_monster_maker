import React, { useState } from 'react';

import { Checkbox, FormControl, FormGroup, FormControlLabel, FormHelperText } from '@material-ui/core';

export default function Movement(props) {
  let { state, onChange } = props;

  const [burrow, setBurrow] = useState(state.movement[0]);
  const [flight, setFlight] = useState(state.movement[1]);
  const [float, setFloat] = useState(state.movement[2]);
  const [ground, setGround] = useState(state.movement[3]);
  const [teleport, setTeleport] = useState(state.movement[4]);
  const [water, setWater] = useState(state.movement[5]);

  const handleBurrow = (event) => {
    setBurrow(event.target.checked);
    updateParentState();
  }

  const handleFlight = (event) => {
    setFlight(event.target.checked);
    updateParentState();
  }

  const handleFloat = (event) => {
    setFloat(event.target.checked);
    updateParentState();
  }

  const handleGround = (event) => {
    setGround(event.target.checked);
    updateParentState();
  }

  const handleTeleport = (event) => {
    setTeleport(event.target.checked);
    updateParentState();
  }

  const handleWater = (event) => {
    setWater(event.target.checked);
  }

  const updateParentState = () => {
    onChange({ movement: [burrow, flight, float, ground, teleport, water]})
  }

  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          value="burrow"
          control={<Checkbox
            checked={burrow}
            onChange={handleBurrow} />}
          label="Burrow"
          labelPlacement="end" />
        <FormControlLabel
          value="flight"
          control={<Checkbox
            checked={flight}
            onChange={handleFlight} />}
          label="Flight"
          labelPlacement="end" />
        <FormControlLabel
          value="float"
          control={<Checkbox
            checked={float}
            onChange={handleFloat} />}
          label="Float"
          labelPlacement="end" />
        <FormControlLabel
          value="ground"
          control={<Checkbox
            checked={ground}
            onChange={handleGround} />}
          label="Ground"
          labelPlacement="end" />
        <FormControlLabel
          value="teleport"
          control={<Checkbox
            checked={teleport}
            onChange={handleTeleport} />}
          label="Teleport"
          labelPlacement="end" />
        <FormControlLabel
          value="water"
          control={<Checkbox
            checked={water}
            onChange={handleWater} />}
          label="Water"
          labelPlacement="end" />
      </FormGroup>
    </FormControl>
  );
}