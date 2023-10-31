const express=require('express');
const router=express.Router();

const {customLabel ,getCustomLabels}=require('../controllers/customLabel');
const {checkPermission}=require('../middleware/checkPermission');
const authMiddleware=require('../middleware/authMiddleware');


router.post('/customlabel/add',customLabel);
router.get('/customlabel/get',getCustomLabels);
module.exports=router;