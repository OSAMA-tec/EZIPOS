// routes/quotationsRoutes.js
const express = require('express');
const router = express.Router();
const quotationsController = require('../controllers/quotationsController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /quotations/all-records
router.get('/all-records',authMiddleware, checkPermission('viewAllQuotations'), quotationsController.getAllQuotations);

// POST /quotations
router.post('/',authMiddleware, checkPermission('editQuotation'), quotationsController.createQuotation);

// GET /quotations/:id
router.get('/:id',authMiddleware, checkPermission('viewAllQuotations'), quotationsController.getQuotationById);

// PUT /quotations/:id
router.put('/:id',authMiddleware, checkPermission('editQuotation'), quotationsController.updateQuotation);

// DELETE /quotations/:id
router.delete('/:id', authMiddleware,checkPermission('deleteQuotation'), quotationsController.deleteQuotation);

module.exports = router;