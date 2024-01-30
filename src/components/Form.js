import React from 'react'
import './Form.css'
import {useFormik} from 'formik'
import signupSchema from './validation'

const initialValues = {
  name: '',
  email: '',
  password: ''
}


const Form = () => {
     const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        console.log(values);
        actions.resetForm();
      }
     })
     console.log(touched);

  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <label>Your Name</label>
      <input type='text' name='name' value={values.name} onBlur={handleBlur} onChange={handleChange}></input>

      <div className='error_container'>
        {errors.name && touched.name && <p className='from_error'>{errors.name}</p>
        }
      </div>

      <label>Email</label>
      <input type='email' name='email' value={values.email} onBlur={handleBlur} onChange={handleChange}></input>
      <div className='error_container'>
        {errors.email && touched.email && <p className='from_error'>{errors.email}</p>
        }
      </div>

      <label>Password</label>
      <input type='password' name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}></input>
      <div className='error_container'>
        {errors.password && touched.password && <p className='from_error'>{errors.password}</p>
        }
      </div>

      <label>Message</label>
      <textarea rows='6' placeholder='Type your message'/>
      <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form
