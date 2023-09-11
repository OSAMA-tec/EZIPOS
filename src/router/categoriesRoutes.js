// routes/categoriesRoutes.js
const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const authMiddleware = require('../../middleware/authMiddleware');

// GET /categories
router.get('/',authMiddleware, categoriesController.getAllCategories);

// POST /categories
router.post('/',authMiddleware, categoriesController.createCategory);

// PUT /categories/:id
router.put('/:id',authMiddleware, categoriesController.updateCategory);

// DELETE /categories/:id
router.delete('/:id',authMiddleware, categoriesController.deleteCategory);

module.exports = router;
