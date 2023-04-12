import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, getAllProducts } from '../features/product/productSlice';
import { getUserProductWishlist } from '../features/user/userSlice';

const Wishlist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getWishlistFromDb();
    }, []);
    const getWishlistFromDb = () => {
        dispatch(getUserProductWishlist());
    };
    const wishlistState = useSelector((state) => state.auth.Wishlist.wishlistState)
    const removeFromWishlist = (id) => {
        dispatch(addToWishlist(id))
        setTimeout(() => {
            dispatch(getUserProductWishlist());
        }, 300)
    }
    return (
        <>
            <Meta title={"Danh Sách Yêu Thích"} />
            <BreadCrumb title="Danh Sách Yêu Thích" />
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        {wishlistState.length === 0 && <div className='text-center'>Không có sản phẩm nào </div>}
                        {wishlistState?.map((item, index) => {
                            <div className='col-3'>
                                <div key={index} className='wishlist-card position-relative'>
                                    <img src='images/images/cross.svg'
                                        onClick={() => { removeFromWishlist(item?._id) }}
                                        alt='cross'
                                        className='position-absolute cross img-fluid'
                                    />
                                    <div className='wishlist-card-image'>
                                        <img src={item?.images[0].url ? item?.images[0].url : 'images/images/kemdanhrang.jpg'}
                                            className='img-fluid w-100'
                                            alt='kemdanhrang' />
                                    </div>
                                    <div className='py-3 px-3'>
                                        <h5 className='title '>
                                            {item?.title}
                                        </h5>
                                        <h6 className='price'>{item?.price}đ</h6>
                                    </div>

                                </div>
                            </div>
                        })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist