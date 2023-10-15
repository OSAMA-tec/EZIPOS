const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  sku: { type: String, unique: true },
  barcodeType: { type: String },
  unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
  //   unit: { type: String},
  businessLocation: { type: String },
  manageStock: { type: Boolean, default: true },
  productDescription: { type: String },
  productImage: { type: String },
  productType: { type: String },
  // Other fields related to product attributes



  //Opening Stock
  openingStock: [{
    quantityRemaining: { type: Number, default: 0.00 },
    unitCostBfrTx: { type: Number, default: 0.00 },
    lotNumber: { type: Number },
    date: { type: Date },
    note: { type: String }
  }],


  //opening stock end

  combo: [{ type: String }],
  // combo:[{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],

  variationType: [{
    variationTempleateID: {
      type: mongoose.Schema.Types.ObjectId, ref: 'Variation'
    },
    variation: [{
      subSKU: { type: Number },
      value: { type: Number },
      variationImage: { type: String }
    }]
  }],

  dfltSellingPrice: { type: Number },
  margin: { type: Number },
  netTotal: { type: Number },

  sellingPriceGroups: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SellingPriceGroup',
    value: { type: Number }
  }],
  // category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  // warranty: { type: mongoose.Schema.Types.ObjectId, ref: 'Warranty' }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
