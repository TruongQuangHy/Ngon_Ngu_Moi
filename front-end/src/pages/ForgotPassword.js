import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Quên mật khẩu"} />
      <BreadCrumb title="Quên mật khẩu" />
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3'>Đặt lại mật khẩu</h3>
                <p className='text-center mt-2 mb-3'>
                  Chúng tôi sẽ gửi email để bạn lấy lại mật khẩu
                </p>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type='email'
                      name='email'
                      placeholder='email'
                      className='form-control' />
                  </div>

                  <div>


                    <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                      <button className='button login' type='submit'>Gửi</button>
                      <Link to='/login'>Thoát</Link>
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

export default ForgotPassword