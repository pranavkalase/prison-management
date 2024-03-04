
import { ErrorMessage, Field, useFormikContext } from 'formik'
import React from 'react'

const TestDrop = () => {
    const formikContext = useFormikContext();

    const handlechange=(e)=>{

        formikContext.setFieldValue('type' , e.target.value)

    }
  return (
    <div>
        <label>Type</label>
        <Field as ='type' id='type' name='type' onchange={handlechange} value={formikContext.values.type}>
            <option value='select'>select</option>
            <option value='Death'>Death</option>
            <option value='Temporary'>Temporary</option>
            <option value='Lifetime'>Lifetime</option>
        </Field>
        <ErrorMessage name='type' component='div' className='text-danger'/>
    </div>
  )
}

export default TestDrop