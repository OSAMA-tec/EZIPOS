const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  barcodeType: { type: String },
  unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
//   unit: { type: String},
  businessLocation: { type: String },
  manageStock: { type: Boolean, default: true },
  productDescription: { type: String },
  productImage: { type: String },
  productType: { type: String },
  // Other fields related to product attributes

  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  warranty: { type: mongoose.Schema.Types.ObjectId, ref: 'Warranty' }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
