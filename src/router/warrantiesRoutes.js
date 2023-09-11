// routes/warrantiesRoutes.js
const express = require('express');
const router = express.Router();
const warrantiesController = require('../controllers/warrantiesController');
const authMiddleware = require('../../middleware/authMiddleware');

// GET /warranties/all-records
router.get('/all-records',authMiddleware, warrantiesController.getAllWarranties);

// POST /warranties
router.post('/',authMiddleware, warrantiesController.createWarranty);

// PUT /warranties/:id
router.put('/:id',authMiddleware, warrantiesController.updateWarranty);

// DELETE /warranties/:id
router.delete('/:id',authMiddleware, warrantiesController.deleteWarranty);

module.exports = router;
