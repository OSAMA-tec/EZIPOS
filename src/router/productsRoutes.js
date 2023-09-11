// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../../middleware/authMiddleware');

// GET /products
router.get('/',authMiddleware, productsController.getAllProducts);

// POST /products
router.post('/',authMiddleware, productsController.createProduct);

// PUT /products/:id
router.put('/:id',authMiddleware, productsController.updateProduct);

// DELETE /products/:id
router.delete('/:id',authMiddleware, productsController.deleteProduct);

module.exports = router;
