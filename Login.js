import React from 'react'
import  { useFormik } from 'formik'
import * as Yup from 'yup'
import './Login.css' 

export default function Login() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email:Yup.string().email("Invalid email address")
            .required("Required")
            ,password: Yup.string().password("Incorrect password")
            .required("Required")  
        }),
        onsubmit:  (values) => {
            console.log(values);
        }
    })

    console.log(formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
        <div className='login'>
            <input
            id='email'
            name='email'
            type='text'
            placeholder='Enter Email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
            <input
            id='password'
            name='password'
            type='text'
            placeholder='Enter Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            />
             {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
        </div>
        <button type='submit'>submit</button>
    </form>
  )
}
