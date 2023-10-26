const express=require('express');
const router=express.Router();
const {getAllProduction,createNewProduction,viewProductionById,updateProductionById}=require('../controllers/Production');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

router.get('/manufacturing/production',authMiddleware, checkPermission('accessProduction'), getAllProduction);
router.post('/manufacturing/production/create',authMiddleware, checkPermission('accessProduction'), createNewProduction);
router.get('/manufacturing/production/:id', authMiddleware,checkPermission('accessProduction'), viewProductionById);
router.put('/manufacturing/production/:id',authMiddleware, checkPermission('accessProduction'), updateProductionById);

module.exports=router;