

import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import './PrisonForm.css';

const DateField = () => {
  const formikContext = useFormikContext();

  return formikContext.values && (formikContext.values.type === 'death' || formikContext.values.type === 'temporary') ? (
    <div className="form-group">
      <label htmlFor="date" className="label">
        Date
      </label>
      <Field type="date" id="date" name="date"  className= "inputFields"/>
      <ErrorMessage name="date" component="div" className='text-danger' />
    </div>
  ) : null;
};

export default DateField;
