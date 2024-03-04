

import React, { useState } from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import './PrisonForm.css';

const DateField = () => {
  const formikContext = useFormikContext();
  const [inputDate, setInputDate] = useState('');

  const handleInput =(e) =>{
    setInputDate(e.target.value)
  }

  return formikContext.values && (formikContext.values.punishment_type === 'Death' || formikContext.values.punishment_type === 'Temporary') ? (
    <div className="form-group">
      <label htmlFor="date" className="label">
        Date
      </label>
      <Field type="date" id="decision_date" name="decision_date"  className= "inputFields" />
      <ErrorMessage name="decision_date" component="div" className='text-danger' />
    </div>
  ) : null;
};

export default DateField;
