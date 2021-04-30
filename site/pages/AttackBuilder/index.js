import React from 'react';

import {
  Button
} from '@material-ui/core';
import { setNestedObjectValues } from 'formik';

export default function AttackBuilder(props) {
  let { closeBuilder } = props;
  const [attackResponse, setAttackResponse] = useState({
    createAttack: false
  });

  const handleUpdate = (update) => {
    setNestedObjectValues(Object.assign({}, attackResponse, update));
  }

  return (
    <div>
      <Button onClick={closeBuilder}>Close Attack Builder</Button>
    </div>
  );
}
