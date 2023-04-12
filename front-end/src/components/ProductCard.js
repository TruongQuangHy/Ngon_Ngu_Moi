import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../features/product/productSlice';


const ProductCard = (props) => {
    const { grid, data } = props;
    console.log(data);
    // let location = useLocation()
    const dispatch = useDispatch();
    const addToWish = (id) => {
        dispatch(addToWishlist(id))
    }

    return (
        <>
            {
                data?.map((item, index) => {
                    return (
                        <div key={index} className='col-3'>
                            <div
                                // to=':id'
                                className='product-card position-relative'
                            >
                                <div className='wishlist-icon position-absolute'>
                                    <button className='border-0 bg-transparent'>
                                        <img
                                            onClick={() => addToWish(item?._id)}
                                            src='images/images/wish.svg'
                                            alt='wishlist' />
                                    </button>
                                </div>
                                <div className='product-image'>
                                    <img src={item?.images[0].url} className='img-fluid' alt='product images' />
                                    <img src='images/images/olay2.jpg' className='img-fluid' alt='product images' />
                                </div>
                                <div className='product-details'>
                                    <h6 className='brand'>{item?.brand}</h6>
                                    <h5 className='product-title'>
                                        {item?.title}
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={item?.totalrating.toString()}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='description'
                                        dangerouslySetInnerHTML={{ __html: item?.description }}
                                    >
                                    </p>
                                    <p className='price'>{item?.price}đ</p>
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-15'>
                                        <Link to={'/product/' + item?._id} className='border-0 bg-transparent'>
                                            <img src='images/images/view.svg' alt='view' />
                                        </Link>
                                        <button className='border-0 bg-transparent'>
                                            <img src='images/images/add-cart.svg' alt='addcart' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default ProductCard