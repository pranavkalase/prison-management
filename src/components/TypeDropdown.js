

import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import './PrisonForm.css';

const TypeDropdown = () => {
  const formikContext = useFormikContext();

  const handleTypeChange = (e) => {
    formikContext.setFieldValue('punishment_type', e.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="punishment_type" className="label">
        Type
      </label>
      <Field as="select" id="punishment_type" name="punishment_type"  className= "inputFields" onChange={handleTypeChange} value={formikContext.values.punishment_type}>
        <option value="">Select</option>
        <option value="Death">Death</option>
        <option value="Temporary">Temporary</option>
        <option value="Lifetime">Lifetime</option>
      </Field>
      <ErrorMessage name="punishment_type" component="div" className='text-danger' />
    </div>
  );
};

export default TypeDropdown;

