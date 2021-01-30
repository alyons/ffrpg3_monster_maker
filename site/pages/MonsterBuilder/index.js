import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import BaseInformation, { validationSchema as baseInformationVS } from './BaseInformation';
import BaseStats from './BaseStats';
import Actions from './Actions';
import Features from './Features';

const initialValues = { };

const validationSchema = Yup.object({
  baseInformationVS
});

const MonsterBuilder = props => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}>
        <Form>
          <BaseInformation />
          <BaseStats />
          <Features />
          <Actions />
        </Form>
      </Formik>
    </>
  );
};

export default MonsterBuilder;
