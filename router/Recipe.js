const express=require('express');
const router=express.Router();
const {getALLRecipe,addRecipe,addRecipetwo,viewRecipeById,updateRecipeById,deleteRecipeById}=require('../controllers/Recipe');
const {checkPermission} = require('../middleware/checkPermission'); 
router.get('/manufacturing/recipe', checkPermission('viewRecipe'), getALLRecipe);
router.delete('/manufacturing/recipe/:id', checkPermission('editRecipe'), deleteRecipeById);
router.get('/manufacturing/recipe/:id', checkPermission('viewRecipe'), viewRecipeById);
router.post('/manufacturing/recipe', checkPermission('addRecipe'), addRecipe);
router.post('/manufacturing/add-ingredient', checkPermission('addRecipe'), addRecipetwo);
router.put('/manufacturing/add-ingredient/:id', checkPermission('editRecipe'), updateRecipeById);

module.exports=router;