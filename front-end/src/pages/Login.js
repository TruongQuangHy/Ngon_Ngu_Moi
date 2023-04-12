import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link, useNavigate } from 'react-router-dom'

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';


const loginSchema = yup.object({
    email: yup.string().email('Email name is required').required('email address is required'),
    password: yup.string().required("Password name is required")
});

const Login = () => {
    const authState = useSelector(state => state.auth);
    const navigaite = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            dispatch(loginUser(values));
            // navigaite('/')
        },
    });
    return (
        <>
            <Meta title={"Đăng nhập"} />
            <BreadCrumb title="Đăng nhập" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Đăng Nhập</h3>
                                <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                                    <div>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='email'
                                            className='form-control'
                                            value={formik.values.email}
                                            onChange={formik.handleChange('email')}
                                            onBlur={formik.handleBlur('email')} />
                                    </div>
                                    <div className='error'>
                                        {formik.touched.email && formik.errors.email}
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
                                        <Link to="/forgotpassword">
                                            Quên Mật Khẩu?
                                        </Link>

                                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                            <button className='button login' type='submit'>Đăng Nhập</button>
                                            <Link to='/signup' className='button signup'>Đăng Kí</Link>
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

export default Login
