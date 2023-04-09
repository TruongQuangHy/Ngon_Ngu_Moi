import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import ProductCard from '../components/ProductCard'
const Home = () => {
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
                        <div className='col-12'>
                            <h3 className='section-heading'>Sản phẩm nổi bật</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home