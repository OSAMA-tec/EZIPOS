const express=require('express');
const router=express.Router();

const {getALLRecipe,addRecipe,addRecipetwo,viewRecipeById,updateRecipeById,deleteRecipeById}=require('../controllers/Recipe');
router.get('/manufacturing/recipe',getALLRecipe);
router.delete('/manufacturing/recipe/:id',deleteRecipeById);
router.get('/manufacturing/recipe/:id',viewRecipeById)
router.post('/manufacturing/recipe',addRecipe);
router.post('/manufacturing/add-ingredient',addRecipetwo);
router.put('/manufacturing/add-ingredient/:id',updateRecipeById);



module.exports=router;

