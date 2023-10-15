const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ingredientSchema = new Schema({
    name: String,
    wastagePercent: Number,
    finalQuantity: Number,
    price: Number
  });
const productionSchema = new Schema({

    refrenceNo: Number,
    manufacturingDate: Date,
    BusinessLocation: String,
    Product: String,
    Quantity:{
        type:Number,
        required:true
    },
    ingredients:[ingredientSchema],
    wastedQuantity:Number,
    productionCost:Number,
    lotNumber:Number,
    totalCost:Number,
    ingredientCost:Number


});

const Production = mongoose.model('Production', productionSchema);

module.exports = Production;