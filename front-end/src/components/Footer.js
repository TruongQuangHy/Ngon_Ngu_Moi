import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsInstagram, BsYoutube, BsFacebook } from 'react-icons/bs'
const Footer = () => {
    return (
        <>
            <footer className='footer py-4'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-5'>
                            <div className='footer-top-data d-flex gap-30 align-items-center'>
                                <img src='/images/images/newsletter.png' alt='newsletter' />
                                <h2 className='mb-0 text-white'>Đăng kí để nhận thông báo</h2>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Nhập Email..."
                                    aria-label="Nhập Email..."
                                    aria-describedby="basic-addon2" />
                                <span className="input-group-text p-2" id="basic-addon2"> Subscribe </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='footer py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4 className='text-white mb-4'>Liên hệ chúng tôi</h4>
                            <div>
                                <address className='text-white fs-6'>
                                    CÔNG TY TNHH 3 THÀNH VIÊN BÁN MỸ PHẨM
                                </address>
                                <address className='text-white fs-6'>
                                    Làm việc từ (08h00 - 21h00)
                                </address>
                                <a href='Phone:+84 931305101' className='mt-4 d-block mb-3'>
                                    +84 931305101
                                </a>
                                <a href='Mail: phamhoailinh779@gmail.com' className='mt-4 d-block mb-3'>
                                    phamhoailinh779@gmail.com
                                </a>
                                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                                    <a className='text-white' href=''>
                                        <BsLinkedin className="fs-4" />
                                    </a>
                                    <a className='text-white' href=''>
                                        <BsInstagram className="fs-4" />
                                    </a>
                                    <a className='text-white' href=''>
                                        <BsYoutube className="fs-4" />
                                    </a>
                                    <a className='text-white' href=''>
                                        <BsFacebook className="fs-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Thông Tin</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Chính sách bảo mật</Link>
                                <Link className='text-white py-2 mb-1'>Chính sách giao hàng</Link>
                                <Link className='text-white py-2 mb-1'>Chính sách thanh toán</Link>
                                <Link className='text-white py-2 mb-1'>Chính sách bảo hành</Link>

                            </div>
                        </div>
                        {/* <div className='col-3'>
                            <h4 className='text-white mb-4'>Account</h4>
                            <div></div>
                        </div> */}
                        <div className='col-2'>
                            <h4 className='text-white mb-4'>Account</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>About us</Link>
                                <Link className='text-white py-2 mb-1'>Fag</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>


                            </div>
                        </div>
                    </div>

                </div>
            </footer>
            <footer className='footer py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0 text-white'>
                                &copy; {new Date().getFullYear()}; Team HLH</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer