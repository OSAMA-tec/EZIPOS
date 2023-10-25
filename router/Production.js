const express=require('express');
const router=express.Router();
const {getAllProduction,createNewProduction,viewProductionById,updateProductionById}=require('../controllers/Production');
const {checkPermission} = require('../middleware/checkPermission'); 

router.get('/manufacturing/production', checkPermission('accessProduction'), getAllProduction);
router.post('/manufacturing/production/create', checkPermission('accessProduction'), createNewProduction);
router.get('/manufacturing/production/:id', checkPermission('accessProduction'), viewProductionById);
router.put('/manufacturing/production/:id', checkPermission('accessProduction'), updateProductionById);

module.exports=router;