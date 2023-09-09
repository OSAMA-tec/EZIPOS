// routes/warrantiesRoutes.js
const express = require('express');
const router = express.Router();
const warrantiesController = require('../controllers/warrantiesController');

// GET /warranties/all-records
router.get('/all-records', warrantiesController.getAllWarranties);

// POST /warranties
router.post('/', warrantiesController.createWarranty);

// PUT /warranties/:id
router.put('/:id', warrantiesController.updateWarranty);

// DELETE /warranties/:id
router.delete('/:id', warrantiesController.deleteWarranty);

module.exports = router;
