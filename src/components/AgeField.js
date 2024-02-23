import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './PrisonForm.css'
const AgeField = () => {
  return (
    <div  className="form-group">
      <label htmlFor="age" className="label">Age</label>
      <Field type="number" id="age" name="age"  className= "inputFields"/>
      <ErrorMessage name="age" component="div" className='text-danger' />
    </div>
  );
};

export default AgeField;
