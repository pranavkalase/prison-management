import React from 'react'
import {Field, ErrorMessage , useFormikContext} from 'formik';


const TestDropdown = () => {

    const formikContext = useFormikContext();
    const  handleChange =(e)=>{

        formikContext.setFieldValue('punishment_type',e.target.value)

    }
  return (
    <div>
    <label htmlFor='Punishment_Type'>
        Type
    </label>

    <Field as='select' id ='punishment_type'  name ='punishment_type'  onchange={handleChange} value= {formikContext.values.punishment_type} >
    <option value="">select</option>
    <option value='Temporary'>Temporary</option>
    <option value='Death'>Death</option>
    <option value='lifetime'>LifeTime</option>

    </Field>
    <ErrorMessage name='punishment_type' component='div'   />

    
    
    </div>
  )
}

export default TestDropdown