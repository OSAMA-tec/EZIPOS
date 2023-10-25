const express=require('express');
const router=express.Router();

const {getAllPurchases,createNewPurchase,updatePurchase,deletePurchaseById}=require('../controllers/PurchasesDue');
const {checkPermission}=require('../middleware/checkPermission');


router.get('/purchases',checkPermission('viewAllPurchaseOrder'),getAllPurchases);
router.post('/purchases/create', checkPermission('createPurchaseOrder'),createNewPurchase);
router.put('/purchases/:id',checkPermission('editPurchaseOrder'),updatePurchase);
router.delete('/purchases/:id',checkPermission('deletePurchaseOrder'),deletePurchaseById);
module.exports=router;