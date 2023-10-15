// Route: routes/invoiceRoutes.js
const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

router.post('', invoiceController.createInvoice);

router.put('/:id', invoiceController.updateInvoiceById);

router.delete('/:id', invoiceController.deleteInvoiceById);

router.get('/:id', invoiceController.viewInvoiceById);

router.get('', invoiceController.viewAllInvoices);

module.exports = router;
