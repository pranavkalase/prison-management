

import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import './PrisonForm.css';

const TypeDropdown = () => {
  const formikContext = useFormikContext();

  const handleTypeChange = (e) => {
    formikContext.setFieldValue('type', e.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="type" className="label">
        Type
      </label>
      <Field as="select" id="type" name="type"  className= "inputFields" onChange={handleTypeChange} value={formikContext.values.type}>
        <option value="">Select</option>
        <option value="death">Death</option>
        <option value="temporary">Temporary</option>
        <option value="lifetime">Lifetime</option>
      </Field>
      <ErrorMessage name="type" component="div" className='text-danger' />
    </div>
  );
};

export default TypeDropdown;

