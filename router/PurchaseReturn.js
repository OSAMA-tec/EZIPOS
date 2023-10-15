const express=require('express');
const router=express.Router();

const {getAllPurchase,updatePurchaseReturnById,createPurchaseReturn,deletePurchaseReturnById}=require('../controllers/PurchaseReturn');
router.get('/purchase-return',getAllPurchase);
router.put('/purchase-return/:id',updatePurchaseReturnById);
router.post('/purchase-return',createPurchaseReturn);
router.delete('/purchase-return/:id',deletePurchaseReturnById);



module.exports=router;