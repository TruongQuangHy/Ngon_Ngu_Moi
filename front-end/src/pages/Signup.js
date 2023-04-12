import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice';


const signUpSchema = yup.object({
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  email: yup.string().email('Email should be valid').required('email address is required'),
  mobile: yup.string().required("Mobile name is required"),
  password: yup.string().required("Password name is required")

});


const Signup = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: values => {
      dispatch(registerUser(values));
    },
  });

  return (
    <>
      <Meta title={"Đăng Kí"} />
      <BreadCrumb title="Đăng Kí" />
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3'>Đăng Kí</h3>
                <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type='text'
                      name='firstname'
                      placeholder='First name'
                      className='form-control'
                      value={formik.values.firstname}
                      onChange={formik.handleChange('firstname')}
                      onBlur={formik.handleBlur('firstname')} />
                  </div>
                  <div className='error'>
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>

                  <div>
                    <input
                      type='text'
                      name='lastname '
                      placeholder='Last name'
                      className='form-control'
                      value={formik.values.lastname}
                      onChange={formik.handleChange('lastname')}
                      onBlur={formik.handleBlur('lastname')} />
                  </div>
                  <div className='error'>
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                  <div>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      className='form-control'
                      value={formik.values.email}
                      onChange={formik.handleChange('email')}
                      onBlur={formik.handleBlur('email')} />
                  </div>
                  <div className='error'>
                    {formik.touched.email && formik.errors.email}
                  </div>

                  <div>
                    <input
                      type='sdt'
                      name='mobile'
                      placeholder='Sdt'
                      className='form-control'
                      value={formik.values.mobile}
                      onChange={formik.handleChange('mobile')}
                      onBlur={formik.handleBlur('mobile')} />
                  </div>
                  <div className='error'>
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>

                  <div className='mt-1'>
                    <input
                      type='password'
                      placeholder='Password'
                      name='password'
                      className='form-control'
                      value={formik.values.password}
                      onChange={formik.handleChange('password')}
                      onBlur={formik.handleBlur('password')} />
                  </div>
                  <div className='error'>
                    {formik.touched.password && formik.errors.password}
                  </div>

                  <div>


                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>

                      <Link to='/login' className='button signup'>Thoát</Link>
                      <button className='button login'>Đăng Kí</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup