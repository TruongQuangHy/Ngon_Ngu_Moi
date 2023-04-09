import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
const Signup = () => {
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
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type='text'
                      name='name'
                      placeholder='Name'
                      className='form-control' />
                  </div>
                  <div>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      className='form-control' />
                  </div>
                  <div>
                    <input
                      type='sdt'
                      name='mobile'
                      placeholder='Sdt'
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