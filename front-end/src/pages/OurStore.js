import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
const OurStore = () => {
    const [grid] = useState(4);

    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Danh mục mua sắm
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Mỹ Phẩm</li>
                                        <li>Nước Hoa</li>
                                        <li>Đồ Dùng Cá Nhân</li>
                                        <li>Chăm sóc cơ thể</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Lọc sản phẩm
                                </h3>
                                <div>
                                    <h5 className='sub-title'>Khả dụng</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className="form-check-input" type='checkbox' value="" id="" />
                                            <label className="form-check-label" htmlfor="">
                                                Trong Kho
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className="form-check-input" type='checkbox' value="" id="" />
                                            <label className="form-check-label" htmlfor="">
                                                Ngoài kho
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Giá</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                            <label htmlFor="floatingInput">Form</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Gắn thẻ sản phẩm
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mỹ phẩm
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mỹ phẩm
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mỹ phẩm
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mỹ phẩm
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    sản phẩm ngẫu nhiên
                                </h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/images/kemdanhrang2.jpg" className="img-fluid" alt="kemdanhrang2" />
                                        </div>
                                        <div className="products-name" >
                                            <h5>Kem đánh răng CloseUp</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>400.000<span>đ</span></b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="images/images/kemdanhrang.jpg" className="img-fluid" alt="kemdanhrang" />
                                        </div>
                                        <div className="products-name" >
                                            <h5>Kem đánh răng PS</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>400.000<span>đ</span></b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='mb-0 d-block' style={{ "width": "100px" }}>Sắp xếp:</p>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value={"manual"}>Nổi bật</option>
                                            <option value={"best-selling"} selected='selected'>Bán chạy nhất</option>
                                            <option value={"tittle-ascending"}>Từ A đến Z</option>
                                            <option value={"tittle-dscending"}>Từ Z đến A</option>
                                            <option value={"price-ascending"}>Từ giá thấp nhất đến giá cao nhất</option>
                                            <option value={"price-dscending"}>Từ giá cao nhất đến giá thấp nhất </option>
                                            <option value={"created-ascending"}>Từ mới đến cũ</option>
                                            <option value={"created-dscending"}>Từ cũ đến mới</option>

                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className='products-list pb-5'>
                                <div className='d-flex gap-10 flex-wrap'>
                                    <ProductCard grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore