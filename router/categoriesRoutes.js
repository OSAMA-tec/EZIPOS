const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const {checkPermission} = require('../middleware/checkPermission');

// GET /categories
router.get('/', checkPermission('viewCategory'), categoriesController.getAllCategories);

// POST /categories
router.post('/', checkPermission('addCategory'), categoriesController.createCategory);

// PUT /categories/:id
router.put('/:id', checkPermission('editCategory'), categoriesController.updateCategory);

// DELETE /categories/:id
router.delete('/:id', checkPermission('deleteCategory'), categoriesController.deleteCategory);

// Get /categorybyid
router.get('/:id', checkPermission('viewCategory'), categoriesController.getCategoryById);

module.exports = router;