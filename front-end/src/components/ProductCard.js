import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const ProductCard = () => {
    // const { grid } = props
    // let location = useLocation()

    return (
        <>
            <div className='col-3'>
                <Link to=':id' className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link to='/wishlist' className='border-0 bg-transparent'>
                            <img src='images/images/wish.svg' alt='wishlist' />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src='images/images/kemduong.jpg' className='img-fluid' alt='product images' />
                        <img src='images/images/olay2.jpg' className='img-fluid' alt='product images' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Olay</h6>
                        <h5 className='product-title'>
                            Kem dưỡng Olay
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className='description'>Chi tiết sản phẩm</p>
                        <p className='price'>100.000đ</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link to='/product/:id' className='border-0 bg-transparent'>
                                <img src='images/images/view.svg' alt='view' />
                            </Link>
                            <Link to='/cart' className='border-0 bg-transparent'>
                                <img src='images/images/add-cart.svg' alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='col-3'>
                <div className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src='images/images/wish.svg' alt='wishlist' />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src='images/images/kemduong.jpg' className='img-fluid' alt='product images' />
                        <img src='images/images/olay2.jpg' className='img-fluid' alt='product images' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Olay</h6>
                        <h5 className='product-title'>
                            Kem dưỡng Olay
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className='description'>Chi tiết sản phẩm</p>
                        <p className='price'>100.000đ</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src='images/images/prodcompare.svg' alt='prodcompare' />
                            </Link>
                            <Link>
                                <img src='images/images/view.svg' alt='view' />
                            </Link>
                            <Link>
                                <img src='images/images/add-cart.svg' alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard