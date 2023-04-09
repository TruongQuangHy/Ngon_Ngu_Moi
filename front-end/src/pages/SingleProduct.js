import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ReactImageZoom from 'react-image-zoom'
import kemduong from '../'
import ReactStars from "react-rating-stars-component";
import { AiOutlineHeart } from 'react-icons/ai'

const SingleProduct = () => {
    const props = { width: 400, height: 600, zoomWidth: 600, img: "https://product.hstatic.net/200000041750/product/olayr_66cca22576aa4207a444b28de4d03542_master.jpg" };
    const [orderedProduct, setorderProduct] = useState(true);
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
                            {/* <div className='other-product-images d-flex flex-wrap gap-15'>
                                <div>
                                    <img src='https://product.hstatic.net/200000041750/product/olayr_66cca22576aa4207a444b28de4d03542_master.jpg'
                                        className='img-fluid' alt='' /></div>
                                <div>
                                    <img src='https://product.hstatic.net/200000041750/product/olayr_66cca22576aa4207a444b28de4d03542_master.jpg'
                                        className='img-fluid' alt='' /></div>
                                <div>
                                    <img src='https://product.hstatic.net/200000041750/product/olayr_66cca22576aa4207a444b28de4d03542_master.jpg'
                                        className='img-fluid' alt='' /></div>
                                <div>
                                    <img src='https://product.hstatic.net/200000041750/product/olayr_66cca22576aa4207a444b28de4d03542_master.jpg'
                                        className='img-fluid' alt='' /></div>
                            </div> */}
                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className='title'>Kem dưỡng ẩm cho da</h3>
                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>100.000đ</p>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>(2 Reviews)</p>
                                    </div>
                                </div>
                                <div className='border-bottom'>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand:</h3>
                                        <p className='product-data'>Olay</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Sản Phẩm:</h3>
                                        <p className='product-data'>Kem Dưỡng</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Gắn thẻ:</h3>
                                        <p className='product-data'>Kem Dưỡng, Làm Đẹp</p>
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
                                            />

                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='button border-0' type='submit'>Thêm vào giỏ hàng</button>
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
                                <p className=''>
                                    Mô tả sản phẩm
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