import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const Wishlist = () => {
    return (
        <>
            <Meta title={"Danh Sách Yêu Thích"} />
            <BreadCrumb title="Danh Sách Yêu Thích" />
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid'
                                />
                                <div className='wishlist-card-image'>
                                    <img src='images/images/kemdanhrang.jpg'
                                        className='img-fluid w-100'
                                        alt='kemdanhrang' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title '>
                                        Thông Tin Sp
                                    </h5>
                                    <h6 className='price'>100.000đ</h6>
                                </div>

                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid'
                                />
                                <div className='wishlist-card-image'>
                                    <img src='images/images/kemdanhrang.jpg'
                                        className='img-fluid w-100'
                                        alt='kemdanhrang' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title '>
                                        Thông Tin Sp
                                    </h5>
                                    <h6 className='price'>100.000đ</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist