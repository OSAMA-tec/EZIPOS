// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const {checkPermission} = require('../middleware/checkPermission'); 

// GET /products
router.get('/', checkPermission('viewProduct'), productsController.getAllProducts);

// POST /products
router.post('/', checkPermission('addProduct'), productsController.createProduct);

// PUT /products/:id
router.put('/:id', checkPermission('editProduct'), productsController.updateProduct);

// DELETE /products/:id
router.delete('/:id', checkPermission('deleteProduct'), productsController.deleteProduct);

// Get /productsbyid
router.get('/:id', checkPermission('viewProduct'), productsController.getProductById);

module.exports = router;