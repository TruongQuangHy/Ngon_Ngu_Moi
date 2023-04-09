import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Login = () => {
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
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='email'
                                        className='form-control' />
                                </div>
                                <div className='mt-1'>
                                    <input
                                        type='password'
                                        placeholder='Password'
                                        name='password'
                                        className='form-control' />
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