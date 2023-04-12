import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux'
const Header = () => {
    const authState = useSelector(state => state.auth);


    return (
        <>


            <header className="header-upper py-3">
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h2>
                                <Link className='text-white'>WebMyPham</Link>
                            </h2>
                        </div>
                        <div className='col-5'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tìm kiếm sản phẩm..."
                                    aria-label="Tìm kiếm sản phẩm..."
                                    aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2"><BsSearch className='fs-6' /></span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-between'>

                                <div>
                                    <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/images/wishlist.svg' alt='wishlist' />
                                        <p className='mb-0'>
                                            <Link to="/wishlist">Danh Sách yêu thích</Link>
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={authState?.user === null ? '/login' : ''} className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/images/user.svg' alt='user' />
                                        {
                                            authState?.user === null ? <p className='mb-0'>
                                                Login <br /> My Account
                                            </p> : <p className='mb-0'>
                                                Welcone {authState?.user?.lastname + ' ' + authState?.user?.firstname}
                                            </p>
                                        }
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/images/cart.svg' alt='cart' />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>giá tiền</p>
                                        </div>

                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </header>

            <header className="header-bottom py-3">
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-15'>
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src='images/images/menu.svg' alt='' />
                                            <span className='me-5 d-inline-block'>Danh mục sản phẩm</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link className="dropdown-item text-white" to="/product">
                                                    Nam
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="/product">
                                                    Nữ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="/product">
                                                    Unisex
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink to="/">Trang chủ</NavLink>
                                        <NavLink to="/product">Sản phẩm</NavLink>
                                        <NavLink to="/contact">Liên hệ</NavLink>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header