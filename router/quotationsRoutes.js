// routes/quotationsRoutes.js
const express = require('express');
const router = express.Router();
const quotationsController = require('../controllers/quotationsController');

// GET /quotations/all-records
router.get('/all-records', quotationsController.getAllQuotations);

// POST /quotations
router.post('/', quotationsController.createQuotation);

// GET /quotations/:id
router.get('/:id', quotationsController.getQuotationById);

// PUT /quotations/:id
router.put('/:id', quotationsController.updateQuotation);

// DELETE /quotations/:id
router.delete('/:id', quotationsController.deleteQuotation);

module.exports = router;
