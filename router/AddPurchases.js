const express=require('express');
const router=express.Router();

const {getAllPurchases,createNewPurchase,updatePurchase,deletePurchaseById}=require('../controllers/PurchasesDue');
const {checkPermission}=require('../middleware/checkPermission');
const authMiddleware=require('../middleware/authMiddleware');


router.get('/purchases',authMiddleware,checkPermission('viewAllPurchaseOrder'),getAllPurchases);
router.post('/purchases/create',authMiddleware, checkPermission('createPurchaseOrder'),createNewPurchase);
router.put('/purchases/:id',authMiddleware,checkPermission('editPurchaseOrder'),updatePurchase);
router.delete('/purchases/:id',authMiddleware,checkPermission('deletePurchaseOrder'),deletePurchaseById);
module.exports=router;