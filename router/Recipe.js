const express=require('express');
const router=express.Router();
const {getALLRecipe,addRecipe,addRecipetwo,viewRecipeById,updateRecipeById,deleteRecipeById}=require('../controllers/Recipe');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 
router.get('/manufacturing/recipe',authMiddleware, checkPermission('viewRecipe'), getALLRecipe);
router.delete('/manufacturing/recipe/:id',authMiddleware, checkPermission('editRecipe'), deleteRecipeById);
router.get('/manufacturing/recipe/:id',authMiddleware, checkPermission('viewRecipe'), viewRecipeById);
router.post('/manufacturing/recipe',authMiddleware, checkPermission('addRecipe'), addRecipe);
router.post('/manufacturing/add-ingredient', authMiddleware,checkPermission('addRecipe'), addRecipetwo);
router.put('/manufacturing/add-ingredient/:id', authMiddleware,checkPermission('editRecipe'), updateRecipeById);

module.exports=router;