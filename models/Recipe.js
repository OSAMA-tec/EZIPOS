const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: String,
  wastagePercent: Number,
  finalQuantity: Number,
  price: Number
});

const recipeSchema = new Schema({
  title:String,
  
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  ingredients: [ingredientSchema] ,
  instruction:String
  
  
  // Embed the ingredients array in the recipe schema
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
