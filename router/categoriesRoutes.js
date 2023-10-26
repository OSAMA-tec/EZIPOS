const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const {checkPermission} = require('../middleware/checkPermission');
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /categories
router.get('/',authMiddleware, checkPermission('viewCategory'), categoriesController.getAllCategories);

// POST /categories
router.post('/',authMiddleware, checkPermission('addCategory'), categoriesController.createCategory);

// PUT /categories/:id
router.put('/:id',authMiddleware, checkPermission('editCategory'), categoriesController.updateCategory);

// DELETE /categories/:id
router.delete('/:id',authMiddleware, checkPermission('deleteCategory'), categoriesController.deleteCategory);

// Get /categorybyid
router.get('/:id',authMiddleware, checkPermission('viewCategory'), categoriesController.getCategoryById);

module.exports = router;