const express=require('express');
const router=express.Router();
const {getAllProduction,createNewProduction,viewProductionById,updateProductionById}=require('../controllers/Production')

router.get('/manufacturing/production',getAllProduction);
router.post('/manufacturing/production/create',createNewProduction);
router.get('/manufacturing/production/:id',viewProductionById);
router.put('/manufacturing/production/:id',updateProductionById);
module.exports=router;