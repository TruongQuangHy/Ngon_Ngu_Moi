const express = require('express');
const { createBrand, updateBrand, deleteBrand, getBrand, getallBrand } = require('../controller/brandCtrl');
const router = express.Router();
//Kiểm tra quyền admin
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');


router.post("/", authMiddleware, isAdmin, createBrand);
router.put("/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/:id", getBrand);
router.get("/", getallBrand);

module.exports = router;