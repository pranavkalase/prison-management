import { ErrorMessage, Field, useFormikContext } from 'formik'
import React from 'react'

const DateTest = () => {
    const formikcontext = useFormikContext()


  return formikcontext.values && (formikcontext.values.type ==='Death' || formikcontext.values.type === 'Temporary')?(
    <div>
         <label htmlFor='date'>Date</label>
        <Field as ='date' id='date' name='date'></Field>
        <ErrorMessage name='date' component='div' className='text-danger'/>
    </div>
  ): null
}

export default DateTest