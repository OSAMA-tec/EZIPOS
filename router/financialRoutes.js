const express = require('express');
const router = express.Router();
const financialController = require('../controllers/financialController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /balance-sheet
router.get('/balance-sheet',authMiddleware, checkPermission('viewHomeData'), financialController.getBalanceSheet);

// GET /trial-stock
router.get('/trial-stock',authMiddleware, checkPermission('viewHomeData'), financialController.getBalanceSheet); 

// GET /cash-flow
router.get('/cash-flow',authMiddleware, checkPermission('viewHomeData'), financialController.getCashFlow);

// GET /payment-account-report
router.get('/payment-account-report', authMiddleware,checkPermission('viewHomeData'), financialController.getPaymentAccountReport);

module.exports = router;