import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './PrisonForm.css'
const NameField = () => {
  return (
    <div  className="form-group">
      <label htmlFor="name" className="label">Name</label>
      <Field type="text" id="name" name="name"  className= "inputFields" />
      <ErrorMessage name="name" component="div" className='text-danger' />
    </div>
  );
};

export default NameField;
