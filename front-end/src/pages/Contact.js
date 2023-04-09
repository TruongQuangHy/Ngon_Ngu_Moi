import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
const Contact = () => {
    return (
        <>
            <Meta title={"Liên hệ"} />
            <BreadCrumb title="Liên hệ với chúng tôi" />
            <div className='contact-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4205948970844!2d106.78290865037893!3d10.855580060658136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276e7ea103df%3A0xb6cf10bb7d719327!2sThu%20Duc%20Campus%20Hutech%20khu%20E!5e0!3m2!1svi!2s!4v1680797004913!5m2!1svi!2s"
                                width="1295"
                                height="450"
                                className='border-0'
                                allowfullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className='col-12 mt-5'>
                            <div className='contact-inner-wrapper d-flex juestify-content-between'>
                                <div>
                                    <h3 className='contact-title mb-4'>Liên hệ</h3>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <div>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder='Tên'
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder='Email'
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder='SDT'
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name=''
                                                id=''
                                                className='w-100 form-control'
                                                cols='30'
                                                rows='4'
                                                placeholder='Góp ý'
                                            >
                                            </textarea>
                                        </div>
                                        <div>
                                            <button className='button'>Gửi</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className='contact-title mb-4'>Hãy liên lạc với chúng tôi</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <AiOutlineHome className='fs-5' />
                                                <address className='mb-0'>
                                                    Thu Duc Campus Hutech khu E
                                                </address>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <BiPhoneCall className='fs-5' />
                                                <a href='Phone:+84 931305101'>
                                                    +84 931305101
                                                </a>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <AiOutlineMail className='fs-5' />
                                                <a href='Mail: phamhoailinh779@gmail.com'>
                                                    phamhoailinh779@gmail.com
                                                </a>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <BiInfoCircle className='fs-5' />
                                                <p className='mb-0'>Làm việc từ T2-CN 9H-20H</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact