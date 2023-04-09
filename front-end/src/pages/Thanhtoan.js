import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
const Thanhtoan = () => {
    return (
        <>
            <Meta title={"Thanh Toán"} />
            <BreadCrumb title="Thanh Toán" />
            <div className='thanhtoan-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='thanhtoan-left-data'>
                                <h3 className='website-name'>WebMyPham</h3>
                                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label='breadcrumb'>
                                    <ol className='breadcrumb'>
                                        {/* <li className='breadcrumb-items'>
                                            <a href='#'>Home</a>
                                        </li>
                                        <li className='breadcrumb-items-active' aria-current="page">
                                            Thư viện
                                        </li> */}
                                    </ol>

                                </nav>
                                <h4 className='title'>Thông tin liên hệ</h4>
                                <p className='user-details'>Email</p>
                                <form action=''
                                    className='d-flex gap-15 justify-content-between'>
                                    <div className='w-100'>
                                        <select name=''
                                            className='form-control form-select'
                                            id=''>
                                            <option value=" " selected disabled>
                                                Chọn thành phố
                                            </option>
                                        </select>
                                        <div className='flex-grow-1'>
                                            <input type='text' placeholder='Họ và tên' className='form-control' />
                                        </div>
                                        <div className='flex-grow-1'>
                                            <input type='text' placeholder='Địa chỉ' className='form-control' />
                                        </div>
                                        <div className='flex-grow-1'>
                                            <input type='text' placeholder='Sdt' className='form-control' />
                                        </div>
                                        <div className='w-100'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <Link to="/cart" className='text-dark'>
                                                    <BiArrowBack className='me-2' />
                                                    Trở lại Cart
                                                </Link>
                                                <Link to="/cart" className='button'>Tiếp tục đặt hàng
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='border-bottom py-4'>
                                <div className='d-flex gap-10 mb-2 align-align-items-center'>
                                    <div className='w-75 d-flex gap-10'>
                                        <div className='w-25 position-relative'>
                                            <span style={{ top: "-20px", right: "2px" }} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>
                                                1
                                            </span>
                                            <img className='img-fluid' src='images/images/kemduong.jpg' alt='product' />
                                        </div>
                                        <div>
                                            <h5 className='title'>TênSp</h5>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5>đ</h5>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className='d-flex justify-content-between align-items-center border-bootom py-4'>
                                    <h4 className='total'>Tổng tiền</h4>
                                    <h5 className='total-price'>đ</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thanhtoan