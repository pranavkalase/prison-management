import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './PrisonForm.css'
const GenderDropdown = () => {
  return (
    <div  className="form-group">
      <label htmlFor="gender" className="label">Gender</label>
      <Field as="select" id="gender" name="gender" className="inputFields">
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Field>
      <ErrorMessage name="gender" component="div" className='text-danger' />
    </div>
  );
};

export default GenderDropdown;
