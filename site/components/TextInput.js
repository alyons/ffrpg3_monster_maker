import React from 'react';
import { useField } from 'formik';

import {
  TextField
} from '@material-ui/core';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      error={meta.touched && meta.error}
      label={label}
      helperText={meta.error}
      inputProps={props} />
  );
};

export default TextInput;
