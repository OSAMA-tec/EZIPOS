const express = require('express');
const router = express.Router();
const { getAllPurchase, updatePurchaseReturnById, createPurchaseReturn, deletePurchaseReturnById } = require('../controllers/PurchaseReturn');
const {checkPermission} = require('../middleware/checkPermission'); 

router.get('/purchase-return', checkPermission('viewAllPurchaseOrder'), getAllPurchase);
router.put('/purchase-return/:id', checkPermission('editPurchaseOrder'), updatePurchaseReturnById);
router.post('/purchase-return', checkPermission('createPurchaseOrder'), createPurchaseReturn);
router.delete('/purchase-return/:id', checkPermission('deletePurchaseOrder'), deletePurchaseReturnById);

module.exports = router;