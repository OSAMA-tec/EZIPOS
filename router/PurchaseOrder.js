const express=require('express');
const router=express.Router();
const {getAllPurchaseOrder,addPurchaseOrder,updatePurchaseOrder,deletePurchaseOrder}=require("../controllers/PurchaseOrder");
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

router.get('/purchase-order', checkPermission('viewAllPurchaseOrder'), getAllPurchaseOrder);
router.post('/purchase-order/create', checkPermission('createPurchaseOrder'), addPurchaseOrder);
router.put('/purchase-order/:id', checkPermission('editPurchaseOrder'), updatePurchaseOrder);
router.delete('/purchase-order/:id', checkPermission('deletePurchaseOrder'), deletePurchaseOrder);

module.exports=router;