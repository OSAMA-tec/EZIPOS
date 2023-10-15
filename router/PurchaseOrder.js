const express=require('express');
const router=express.Router();

const {getAllPurchaseOrder,addPurchaseOrder,updatePurchaseOrder,deletePurchaseOrder}=require("../controllers/PurchaseOrder");

router.get('/purchase-order',getAllPurchaseOrder);
router.post('/purchase-order/create',addPurchaseOrder);
router.put('/purchase-order/:id',updatePurchaseOrder);
router.delete('/purchase-order/:id',deletePurchaseOrder);



module.exports=router;