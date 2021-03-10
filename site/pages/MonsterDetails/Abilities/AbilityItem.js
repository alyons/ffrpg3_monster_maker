import React, { useState } from 'react';

import { 
  Card,
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core';

const AbilityItem = (props) => {
  const [expanded, setExpanded] = useState(false);

  let {
    name
  } = props;

  return (
    <Card>
      <CardHeader title={name}/>
      <CardContent>
        <Typography></Typography>
      </CardContent>
    </Card>
  )
};

export default AbilityItem;
