// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// GET /products
router.get('/', productsController.getAllProducts);

// POST /products
router.post('/', productsController.createProduct);

// PUT /products/:id
router.put('/:id', productsController.updateProduct);

// DELETE /products/:id
router.delete('/:id', productsController.deleteProduct);

// Get /productsbyid
router.get('/:id', productsController.getProductById);

module.exports = router;
