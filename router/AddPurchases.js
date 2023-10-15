const express=require('express');
const router=express.Router();

const {getAllPurchases,createNewPurchase,updatePurchase,deletePurchaseById}=require('../controllers/PurchasesDue');
router.get('/purchases',getAllPurchases);
router.post('/purchases/create',createNewPurchase);
router.put('/purchases/:id',updatePurchase);
router.delete('/purchases/:id',deletePurchaseById);
module.exports=router;