const express = require('express');
const router = express.Router();
const { getAllPurchase, updatePurchaseReturnById, createPurchaseReturn, deletePurchaseReturnById } = require('../controllers/PurchaseReturn');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

router.get('/purchase-return', authMiddleware,checkPermission('viewAllPurchaseOrder'), getAllPurchase);
router.put('/purchase-return/:id',authMiddleware, checkPermission('editPurchaseOrder'), updatePurchaseReturnById);
router.post('/purchase-return', authMiddleware,checkPermission('createPurchaseOrder'), createPurchaseReturn);
router.delete('/purchase-return/:id', authMiddleware,checkPermission('deletePurchaseOrder'), deletePurchaseReturnById);

module.exports = router;