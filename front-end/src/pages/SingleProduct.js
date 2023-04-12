import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link, useLocation } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ReactImageZoom from 'react-image-zoom'
import kemduong from '../'
import ReactStars from "react-rating-stars-component";
import { AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getAProducts } from '../features/product/productSlice'
import { addProdToCart } from '../features/user/userSlice'
import { toast } from 'react-toastify'


const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    console.log(quantity)

    const location = useLocation();
    console.log(location)

    const getProductId = location.pathname.split('/')[2];
    const dispatch = useDispatch();

    const productState = useSelector(state => state.product.singleproduct);
    console.log(productState);

    useEffect(() => {
        dispatch(getAProducts(getProductId));
    }, [getProductId]);


    const uploadCart = () => {
        const data = { productId: productState?._id, quantity, price: productState?.price };
        console.log(data);
        dispatch(addProdToCart(data));
    }

    const props = { width: 400, height: 600, zoomWidth: 600, img: productState?.images[0]?.url ? productState.images[0].url : "https://product.hstatic.net/200000041750/product/olayr_66cca22576aa4207a444b28de4d03542_master.jpg" };

    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>

                            </div>

                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className='title'>{productState?.title}</h3>
                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>{productState?.price}đ</p>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={productState?.totalrating.toString()}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>(2 Reviews)</p>
                                    </div>
                                </div>
                                <div className='border-bottom'>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand:</h3>
                                        <p className='product-data'>{productState?.brand}</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Sản Phẩm:</h3>
                                        <p className='product-data'>{productState?.category}</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Gắn thẻ:</h3>
                                        <p className='product-data'>{productState?.tages}</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Tình trạng:</h3>
                                        <p className='product-data'>Trong kho</p>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading'>Kích thước:</h3>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className='badge border-1 bg-white text-dark border-secondary'>50ml</span>
                                            <span className='badge border-1 bg-white text-dark border-secondary'>100ml</span>
                                            <span className='badge border-1 bg-white text-dark border-secondary'>200ml</span>

                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                        <h3 className='product-heading'>Số lượng</h3>
                                        <div className=''>
                                            <input
                                                type='number'
                                                name=''
                                                min={1}
                                                max={10}
                                                className='form-control'
                                                style={{ width: '50px' }}
                                                id=''
                                                onChange={(e) => setQuantity(e.target.value)}
                                                value={quantity}
                                            />

                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='button border-0' type='button' onClick={() => { uploadCart() }}>Thêm vào giỏ hàng</button>
                                            <button className='button signup'>Mua ngay</button>
                                        </div>

                                    </div>
                                    <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <a href=''>
                                                <AiOutlineHeart className='fs-5 me-2' /> Thêm Vào Wishlist
                                            </a>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Ship:</h3>
                                        <p className='product-data'>Hàng sẽ được giao trong vòng 2 đến 3 ngày</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='bg-white p-3'>
                                <h4>Mô tả</h4>
                                <p dangerouslySetInnerHTML={{ __html: productState?.description }} className=''>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SingleProduct