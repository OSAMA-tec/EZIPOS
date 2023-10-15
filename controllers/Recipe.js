
const Recipe = require('../models/Recipe');

const getALLRecipe = async (req,res) => {
  try {
    
    const recipes = await Recipe.find();

    res.status(200).json(recipes);
  } catch (error) {
    
    console.error('Error fetching recipes:', error);
    
  }
};
const addRecipetwo = async (req, res) => {
  try {
    
    const { title, ingredients, instructions } = req.body;

    
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
    });

    
    const savedRecipe = await newRecipe.save();

    res.status(201).json(savedRecipe);
  } catch (error) {
   
    console.error('Error adding recipe:', error);
    res.status(500).json({ error: 'Failed to add recipe' });
  }
};

const addRecipe = async (req, res) => {
  try {
    const { product, copyRecipeId } = req.body;

    
    const existingProduct = await Product.findById(product);
    if (!existingProduct) {
      return res.status(400).json({ error: 'Selected product not found' });
    }

    
    let copyRecipe = null;
    if (copyRecipeId) {
      copyRecipe = await Recipe.findById(copyRecipeId);
      if (!copyRecipe) {
        return res.status(400).json({ error: 'Recipe to copy from not found' });
      }
    }

    
    const newRecipe = new Recipe({
      product: existingProduct._id,
      recipe: copyRecipe ? copyRecipe._id : null,
    });

    
    const savedRecipe = await newRecipe.save();

    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error('Error creating a new recipe:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const viewRecipeById = async (req, res) => {
  try {
    const recipeId = req.params.id; 
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.status(200).json(recipe);
  } catch (error) {
    
    console.error('Error fetching recipe by ID:', error);
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
};
const updateRecipeById = async (req, res) => {
  try {
    const recipeId = req.params.id; 
    const { title, ingredients, instructions } = req.body; 
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      recipeId,
      { title, ingredients, instructions },
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.status(200).json(updatedRecipe);
  } catch (error) {
    
    console.error('Error updating recipe by ID:', error);
    res.status(500).json({ error: 'Failed to update recipe' });
  }
};

const deleteRecipeById = async (req, res) => {
  try {
    const recipeId = req.params.id; 
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);

    if (!deletedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.status(204).send(); 
  } catch (error) {
    
    console.error('Error deleting recipe by ID:', error);
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
};
// hlo



  

module.exports = { getALLRecipe ,addRecipe,addRecipetwo,viewRecipeById,updateRecipeById,deleteRecipeById};
