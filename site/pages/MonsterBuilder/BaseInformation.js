import React from 'react';
import * as Yup from 'yup';

import {
  Typography
} from '@material-ui/core';

import TextInput from '../../components/TextInput';

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Please input the name of the monster")
});

const BaseInformation = props => {
  return(
    <>
      <Typography variant="h5">Base Information</Typography>
      <TextInput 
        label="Name"
        name="name"
        type="text"
        placeholder="Marlboro"
      />
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
export { validationSchema };
