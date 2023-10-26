// Route: routes/invoiceRoutes.js
const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

router.post('', checkPermission('addSell'), invoiceController.createInvoice);

router.put('/:id', checkPermission('updateSell'), invoiceController.updateInvoiceById);

router.delete('/:id', checkPermission('deleteSell'), invoiceController.deleteInvoiceById);

router.get('/:id', checkPermission('viewAllSell'), invoiceController.viewInvoiceById);

router.get('', checkPermission('viewAllSell'), invoiceController.viewAllInvoices);

module.exports = router;