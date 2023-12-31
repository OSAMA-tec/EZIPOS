// routes/warrantiesRoutes.js
const express = require('express');
const router = express.Router();
const warrantiesController = require('../controllers/warrantiesController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /warranties/all-records
router.get('/',authMiddleware, checkPermission('viewProduct'), warrantiesController.getAllWarranties);

// POST /warranties
router.post('/', authMiddleware,checkPermission('addProduct'), warrantiesController.createWarranty);

// PUT /warranties/:id
router.put('/:id',authMiddleware, checkPermission('editProduct'), warrantiesController.updateWarranty);

// DELETE /warranties/:id
router.delete('/:id',authMiddleware, checkPermission('deleteProduct'), warrantiesController.deleteWarranty);

// Get /warrantybyid
router.get('/:id',authMiddleware, checkPermission('viewProduct'), warrantiesController.getWarrantyById);

module.exports = router;