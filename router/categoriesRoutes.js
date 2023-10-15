// routes/categoriesRoutes.js
const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

// GET /categories
router.get('/', categoriesController.getAllCategories);

// POST /categories
router.post('/', categoriesController.createCategory);

// PUT /categories/:id
router.put('/:id', categoriesController.updateCategory);

// DELETE /categories/:id
router.delete('/:id', categoriesController.deleteCategory);

// Get /categorybyid
router.get('/:id', categoriesController.getCategoryById);

module.exports = router;
