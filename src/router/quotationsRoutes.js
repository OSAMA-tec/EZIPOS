// routes/quotationsRoutes.js
const express = require('express');
const router = express.Router();
const quotationsController = require('../controllers/quotationsController');
const authMiddleware = require('../../middleware/authMiddleware');

// GET /quotations/all-records
router.get('/all-records',authMiddleware, quotationsController.getAllQuotations);

// POST /quotations
router.post('/',authMiddleware, quotationsController.createQuotation);

// GET /quotations/:id
router.get('/:id',authMiddleware, quotationsController.getQuotationById);

// PUT /quotations/:id
router.put('/:id',authMiddleware, quotationsController.updateQuotation);

// DELETE /quotations/:id
router.delete('/:id',authMiddleware, quotationsController.deleteQuotation);

module.exports = router;
