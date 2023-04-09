const express = require('express');
const { createCoupon, getAllCoupons, updateCoupon, deleteCoupon } = require('../controller/couponCtrl');
const router = express.Router();
//Kiểm tra quyền admin
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, isAdmin, createCoupon);
router.get('/', authMiddleware, getAllCoupons);
router.put('/:id', authMiddleware, isAdmin, updateCoupon);
router.delete('/:id', authMiddleware, isAdmin, deleteCoupon);
module.exports = router;

