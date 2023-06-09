const express = require('express');
const { createCategory, updateCategory, deleteCategory, getCategory, getallCategory } = require('../controller/blogCatCtrl');
const router = express.Router();
//Kiểm tra quyền admin
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');


router.post("/", authMiddleware, isAdmin, createCategory);
router.put("/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);
router.get("/:id", authMiddleware, getCategory);
router.get("/", authMiddleware, getallCategory);

module.exports = router;