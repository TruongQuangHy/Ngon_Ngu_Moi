import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Cart = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrumb title="Cart" />
            <section className='cart-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                                <h4 className='cart-col-1'>Sản phẩm</h4>
                                <h4 className='cart-col-2'>Giá</h4>
                                <h4 className='cart-col-3'>Số lượng</h4>
                                <h4 className='cart-col-4'>Tổng tiền</h4>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='cart-data py-3 d-flex justify-content-between align-items-center'>
                                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                    <div className='w-25'>
                                        <img src='images/images/kemduong.jpg'
                                            className='img-fluid'
                                            alt='product image' />
                                    </div>
                                    <div className='w-75'>
                                        <p>TênSp</p>
                                        <p>size :ml</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className='price'>100.000đ</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center gap-15'>
                                    <div>
                                        <input
                                            className='form-control'
                                            type='number'
                                            name=''
                                            min={1}
                                            max={100}
                                            id=''
                                        />
                                    </div>
                                    <div>
                                        <AiFillDelete className='text-danger' />
                                    </div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className='price'>đ</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 py-2 mt-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <Link to='/product' className='button'>
                                    Tiếp tục mua sắm
                                </Link>
                                <div className='d-flex flex-column align-items-end'>
                                    <h4>Tổng tiền: đ</h4>
                                    <p>Sau khi thực hiện xong giao dịch sẽ thoát</p>
                                    <Link to='/thanhtoan' className='button'>
                                        Thanh toán
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart