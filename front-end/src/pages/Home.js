import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";



import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/product/productSlice'


const Home = () => {
    const dispatch = useDispatch();
    const productState = useSelector((state) => state?.product?.product);
    const navigate = useNavigate()
    useEffect(() => {
        getallProducts();
    }, []);
    const getallProducts = () => {
        dispatch(getAllProducts());
    };
    return (


        <>
            <section className='home-wrapper-1 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-banner position-relative'>
                                <img src='images/images/mpbig.jpg'
                                    className='img-fluid rounded-3'
                                    alt='main banner' />
                                <div className='main-banner-content position-absolute'>
                                    <h4>HOT</h4>
                                    <h5>SPECIAL SALE</h5>

                                    <Link to='/product' className='button'>Mua</Link>
                                </div>
                            </div>

                        </div>
                        <div className='col-6'>
                            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                                <div className='small-banner position-relative'>
                                    <img src='images/images/mp1.jpg'
                                        className='img-fluid rounded-3'
                                        alt='main banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>HÀNG BEST SALE</h4>
                                        <Link to='/product' className='button'>Xem</Link>

                                    </div>
                                </div>
                                <div className='small-banner position-relative'>
                                    <img src='images/images/mp2.jpg'
                                        className='img-fluid rounded-3'
                                        alt='main banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>HÀNG MỚI</h4>
                                        <Link to='/product' className='button'>Xem</Link>

                                    </div>
                                </div>
                                <div className='small-banner position-relative'>
                                    <img src='images/images/mp3.jpg'
                                        className='img-fluid rounded-3'
                                        alt='main banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>GIẢM ĐẾN 50%</h4>
                                        <Link to='/product' className='button'>Xem</Link>

                                    </div>
                                </div>
                                <div className='small-banner position-relative'>
                                    <img src='images/images/mp4.jpg'
                                        className='img-fluid rounded-3'
                                        alt='main banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>ƯU ĐÃI HẤP DẪN</h4>
                                        <Link to='/product' className='button'>Xem</Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='categories d-flex justify-content-between align-items-center'>
                                <Link to='/product' className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Mỹ Phẩm</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/images/hinh1.jpg' alt='hinh1' />
                                </Link>
                                <Link to='/product' className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Nước Hoa</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/images/hinh2.jpg' alt='hinh2' />
                                </Link>
                                <Link to='/product' className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Đồ Dùng Cá Nhân</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/images/hinh3.jpg' alt='hinh3' />
                                </Link>
                                <Link to='/product' className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Chăm sóc cơ thể</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/images/hinh4.jpg' alt='hinh4' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='marque-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper card-wrapper'>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src='images/images/lorel.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/images/simple.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/images/olay.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/images/chanel.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/images/colgate.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/images/closeup.png' alt='brand' />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className='container'>
                    <div className='row'>
                        {productState && productState?.map((item, index) => {
                            if (item.tags === 'featured') {
                                return (
                                    <div key={index} className='col-3'>
                                        <div
                                            // to=':id'
                                            className='product-card position-relative'
                                        >
                                            <div className='wishlist-icon position-absolute'>
                                                <button className='border-0 bg-transparent'>
                                                    <img
                                                        // onClick={() => addToWish(item?._id)}
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
                                                    <button className='border-0 bg-transparent'>
                                                        <img onClick={() => navigate("/product/" + item?._id)} src='images/images/view.svg' alt='view' />
                                                    </button>
                                                    <button to='/cart' className='border-0 bg-transparent'>
                                                        <img src='images/images/add-cart.svg' alt='addcart' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })};
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home