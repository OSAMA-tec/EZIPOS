const express=require('express');
const router=express.Router();
const {getAllPurchaseOrder,addPurchaseOrder,updatePurchaseOrder,deletePurchaseOrder}=require("../controllers/PurchaseOrder");
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

router.get('/purchase-order', authMiddleware,checkPermission('viewAllPurchaseOrder'), getAllPurchaseOrder);
router.post('/purchase-order/create', authMiddleware,checkPermission('createPurchaseOrder'), addPurchaseOrder);
router.put('/purchase-order/:id',authMiddleware, checkPermission('editPurchaseOrder'), updatePurchaseOrder);
router.delete('/purchase-order/:id', authMiddleware,checkPermission('deletePurchaseOrder'), deletePurchaseOrder);

module.exports=router;