const mongoose = require('mongoose');

// Define the Selling Price Group schema
const sellingPriceGroupSchema = new mongoose.Schema({
  name: { type: String, required: true , unique: true},
  description: { type: String },
  price: { type: Number, default:0 }, // The price associated with this group for the product
});

const SellingPriceGroup = mongoose.model('SellingPriceGroup', sellingPriceGroupSchema);

module.exports = SellingPriceGroup;