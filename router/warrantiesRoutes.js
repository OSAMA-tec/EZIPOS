// routes/warrantiesRoutes.js
const express = require('express');
const router = express.Router();
const warrantiesController = require('../controllers/warrantiesController');
const {checkPermission} = require('../middleware/checkPermission'); 

// GET /warranties/all-records
router.get('/', checkPermission('viewProduct'), warrantiesController.getAllWarranties);

// POST /warranties
router.post('/', checkPermission('addProduct'), warrantiesController.createWarranty);

// PUT /warranties/:id
router.put('/:id', checkPermission('editProduct'), warrantiesController.updateWarranty);

// DELETE /warranties/:id
router.delete('/:id', checkPermission('deleteProduct'), warrantiesController.deleteWarranty);

// Get /warrantybyid
router.get('/:id', checkPermission('viewProduct'), warrantiesController.getWarrantyById);

module.exports = router;