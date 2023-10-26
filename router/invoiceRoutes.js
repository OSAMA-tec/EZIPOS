// Route: routes/invoiceRoutes.js
const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

router.post('',authMiddleware, checkPermission('addSell'), invoiceController.createInvoice);

router.put('/:id',authMiddleware, checkPermission('updateSell'), invoiceController.updateInvoiceById);

router.delete('/:id',authMiddleware, checkPermission('deleteSell'), invoiceController.deleteInvoiceById);

router.get('/:id',authMiddleware, checkPermission('viewAllSell'), invoiceController.viewInvoiceById);

router.get('',authMiddleware, checkPermission('viewAllSell'), invoiceController.viewAllInvoices);

module.exports = router;