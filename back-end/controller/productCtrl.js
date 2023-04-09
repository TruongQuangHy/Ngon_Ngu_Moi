const Product = require("../models/productModel");
const User = require('../models/userModel')
const asyncHandler = require("express-async-handler");
const slugify = require('slugify');
const { match } = require("assert");
const { validateMongoDbId } = require('../utils/validateMogodbld');
const path = require("path");
const { cloudinaryUploadImg } = require("../utils/cloudinary");
const fs = require('fs');

const createProduct = asyncHandler(async (req, res) => {

    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);

    } catch (error) {
        throw new Error(error);
    }
});
// Cập nhập sản phẩm
const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    // validateMongoDbId(id);
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updateProduct = await Product.findOneAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateProduct);
    } catch (error) {
        throw new Error(error)
    }

});

//xóa product

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    // validateMongoDbId(id);
    try {
        const deleteProduct = await Product.findByIdAndDelete(id)
        res.json(deleteProduct);
    } catch (error) {
        throw new Error(error)
    }

});

//Lấy một sản phẩm
const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    // validateMongoDbId(id);
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error)
    }
})

//lấy tất cả sản phẩm
const getAllProduct = asyncHandler(async (req, res) => {

    try {

        //Lọc sản phẩm = Filltering
        const queryObj = { ...req.query };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach(el => delete queryObj[el]);
        console.log(queryObj);
        let quertStr = JSON.stringify(queryObj);
        quertStr = quertStr.replace(/\b(gte|gt|lte)\b/g, (match) => `$${match}`);

        let query = Product.find(JSON.parse(quertStr));

        //Phân loại soản phẩm = sorting

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createdAt');
        }

        //Giới hạn cái trường theo các lĩnh vực = fields
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        } else {
            query = query.select('-__v');
        }

        //Phân trang = page

        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error('This Page does not exists');
        }
        console.log(page, limit, skip);

        const product = await query;
        res.json(product);
    } catch (error) {
        throw new Error(error)
    }
});

const filterProduct = asyncHandler(async (req, res) => {

})

//them yeu thich
const addToWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { prodId } = req.body;
    try {
        const user = await User.findById(_id);
        const alreadyadded = user.wishlist.find((id) => id.toString() === prodId);
        if (alreadyadded) {
            let user = await User.findByIdAndUpdate(_id, {
                $pull: { wishlist: prodId },

            }, {
                new: true
            });
            res.json(user);
        } else {
            let user = await User.findByIdAndUpdate(_id, {
                $push: { wishlist: prodId },

            }, {
                new: true
            });
            res.json(user);
        }
    } catch (error) {
        throw new Error(error)
    }
});

const rating = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { star, prodId, comment } = req.body;
    try {
        const product = await Product.findById(prodId);
        let alreadyRated = product.ratings.find((userId) => userId.postedby.toString() === _id.toString());
        if (alreadyRated) {
            const updateRating = await Product.updateOne({
                ratings: { $elemMatch: alreadyRated },
            }, {
                $set: { "ratings.$.star": star, "ratings.$.comment": comment }
            }, {
                new: true
            });
        } else {
            const rateProduct = await Product.findByIdAndUpdate(prodId, {
                $push: {
                    ratings: {
                        star: star,
                        comment: comment,
                        postedby: _id,
                    },
                },
            }, {
                new: true,
            });
        }
        const getallratings = await Product.findById(prodId);
        let totoalRating = getallratings.ratings.length;
        let raingsum = getallratings.ratings.map((item) => item.star).reduce((prev, curr) => prev + curr, 0);
        let actualRating = Math.round(raingsum / totoalRating);
        let finalproduct = await Product.findByIdAndUpdate(prodId, {
            totalrating: actualRating,
        }, {
            new: true
        })
        res.json(finalproduct)
    } catch (error) {
        throw new Error(error)
    }
})

const uploadImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id)
    try {
        const uploader = (path) => cloudinaryUploadImg(path, 'images');
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newpath = await uploader(path);
            urls.push(newpath);
            fs.unlinkSync(path);
        }
        const findProduct = await Product.findByIdAndUpdate(id, {
            images: urls.map((file) => {
                return file;
            })
        }, {
            new: true,
        });
        res.json(findProduct)
    } catch (error) {

    }
})

module.exports = {
    createProduct,
    getaProduct,
    getAllProduct,
    filterProduct,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages,
};