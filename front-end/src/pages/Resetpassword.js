import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
const Resetpassword = () => {
    return (
        <>
            <Meta title={"Đặt lại mật khẩu"} />
            <BreadCrumb title="Đặt lại mật khẩu" />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Đặt lại mật khẩu</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <input
                                            type='password'
                                            placeholder='password'
                                            name='password'
                                            className='form-control' />
                                    </div>
                                    <div className='mt-1'>
                                        <input
                                            type='password'
                                            placeholder='Confirm Password'
                                            name='confpassword'
                                            className='form-control' />
                                    </div>
                                    <div>


                                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                            <button className='button login'>Đặt Lại</button>

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

export default Resetpassword