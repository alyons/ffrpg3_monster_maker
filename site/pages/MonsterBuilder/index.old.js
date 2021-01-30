import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import Selector from '../../components/Selector';
import TextInput from '../../components/TextInput';

import BaseInformation, { validationSchema as baseInformationVS } from './BaseInformation';

const MONSTER_CATEGORIES = [
  "abnormal",
  "aerial",
  "amorph",
  "aquan",
  "arcana",
  "beast",
  "constructs",
  "dragon",
  "fiend",
  "humaniod",
  "insect",
  "lizard",
  "plant",
  "undead"
];

const MONSTER_INTELLIGENCE = [
  "none",
  "animal",
  "primitive",
  "average",
  "high",
  "elder"
];

const MONSTER_REACTIONS = [
  "friendly",
  "neutral",
  "wary",
  "hostile"
];

const MONSTER_TYPES = [
  "regular",
  "notorious",
  "boss",
  "endBoss"
];

const MonsterBuilder = props => {
  return (
    <>
      <Typography variant="h1">Create a Monster</Typography>
      <Formik
        initialValues={{
          name: ""
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Required"),
          category: Yup.string()
            .oneOf(MONSTER_CATEGORIES)
            .required("Required"),
          type: Yup.string()
            .oneOf(MONSTER_TYPES)
            .required("Required"),
          level: Yup.number()
            .min(1)
            .max(100)
            .required("Required")
        })}
        // onSubmit={async (values, { setSubmitting }) => {
        //   await new Promise(r => setTimeout(r, 500));
        //   setSubmitting(false);
        // }}
      >
        <Form>
          <TextInput 
            label="Name"
            name="name"
            type="text"
            placeholder="Marlboro"
          />
          <Selector
            label="Category"
            name="category"
            defaultoption="Select a Category"
            options={MONSTER_CATEGORIES}
          />
          <TextInput
            label="Family"
            name="family"
            type="text"
            placeholder="Marlboro"
          />
          <TextInput
            label="Location"
            name="location"
            type="text"
            placeholder="Jungle"
          />
          <Selector
            label="Intelligence"
            name="intelligence"
            defaultoption="Select Intelligence"
            options={MONSTER_INTELLIGENCE}
          />
          <Selector
            label="Reaction"
            name="reaction"
            defaultoption="Select Reaction"
            options={MONSTER_REACTIONS}
          />
          <Selector
            label="Type"
            name="type"
            defaultoption="Select Type"
            options={MONSTER_TYPES}
          />
          <TextInput
            label="Level"
            name="level"
            type="number"
            placeholder="1"
            min="1"
            max="100"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <BaseInformation />
    </>
  );
};

export default MonsterBuilder;
