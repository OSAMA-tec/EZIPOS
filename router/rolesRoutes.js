// routes/quotationsRoutes.js
const express = require('express');
const router = express.Router();
const quotationsController = require('../controllers/quotationsController');
const {checkPermission} = require('../middleware/checkPermission'); 

// GET /quotations/all-records
router.get('/all-records', checkPermission('viewAllQuotations'), quotationsController.getAllQuotations);

// POST /quotations
router.post('/', checkPermission('editQuotation'), quotationsController.createQuotation);

// GET /quotations/:id
router.get('/:id', checkPermission('viewAllQuotations'), quotationsController.getQuotationById);

// PUT /quotations/:id
router.put('/:id', checkPermission('editQuotation'), quotationsController.updateQuotation);

// DELETE /quotations/:id
router.delete('/:id', checkPermission('deleteQuotation'), quotationsController.deleteQuotation);

module.exports = router;