// routes/warrantiesRoutes.js
const express = require('express');
const router = express.Router();
const warrantiesController = require('../controllers/warrantiesController');

// GET /warranties/all-records
router.get('/', warrantiesController.getAllWarranties);

// POST /warranties
router.post('/', warrantiesController.createWarranty);

// PUT /warranties/:id
router.put('/:id', warrantiesController.updateWarranty);

// DELETE /warranties/:id
router.delete('/:id', warrantiesController.deleteWarranty);

// Get /warrantybyid
router.get('/:id', warrantiesController.getWarrantyById);

module.exports = router;
