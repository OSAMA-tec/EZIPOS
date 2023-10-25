const express = require('express');
const router = express.Router();
const financialController = require('../controllers/financialController');
const checkPermission = require('../middleware/checkPermission'); 

// GET /balance-sheet
router.get('/balance-sheet', checkPermission('viewHomeData'), financialController.getBalanceSheet);

// GET /trial-stock
router.get('/trial-stock', checkPermission('viewHomeData'), financialController.getBalanceSheet); 

// GET /cash-flow
router.get('/cash-flow', checkPermission('viewHomeData'), financialController.getCashFlow);

// GET /payment-account-report
router.get('/payment-account-report', checkPermission('viewHomeData'), financialController.getPaymentAccountReport);

module.exports = router;