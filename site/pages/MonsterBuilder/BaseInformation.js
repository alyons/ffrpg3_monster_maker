import React from 'react';

import {
  Typography
} from '@material-ui/core';

import TextInput from '../../components/TextInput';

const BaseInformation = props => {
  return(
    <>
      <Typography variant="h5">Base Information</Typography>
      <Typography>Name</Typography>
      <Typography>Category</Typography>
      <Typography>Monster Family</Typography>
      <Typography>Location</Typography>
      <Typography>Size</Typography>
      <Typography>Intelligence</Typography>
      <Typography>Reaction</Typography>
      <Typography>Frequency</Typography>
      <Typography>Behavior*</Typography>
      <Typography>Appearance*</Typography>
      <Typography>Encounter Size**</Typography>
    </>
  );
};

export default BaseInformation;
