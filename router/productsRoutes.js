// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /products
router.get('/', authMiddleware, checkPermission('viewProduct'), productsController.getAllProducts);

// POST /products
router.post('/', authMiddleware, checkPermission('addProduct'), productsController.createProduct);

// PUT /products/:id
router.put('/:id', authMiddleware, checkPermission('editProduct'), productsController.updateProduct);

// DELETE /products/:id
router.delete('/:id', authMiddleware, checkPermission('deleteProduct'), productsController.deleteProduct);

// Get /productsbyid
router.get('/:id', authMiddleware, checkPermission('viewProduct'), productsController.getProductById);


module.exports = router;