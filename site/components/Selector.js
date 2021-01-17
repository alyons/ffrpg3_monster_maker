import React from 'react';
import { useField } from 'formik';

const Selector = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}>
        <option value="">{props.defaultoption}</option>
        {props.options.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null }
    </>
  );
};

export default Selector;
