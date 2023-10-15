const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  products: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
//   unit: { type: String},
  location: { type: String },
  priority: { type: Number },
  discountType: {type: String},
  discountAmount: {type: Number},
  startAt: { type: Date},
  endAt: { type: Date},
  sellingPriceGrp: { type: mongoose.Schema.Types.ObjectId, ref: 'SellingPriceGroup' },

  isApplyinCustomerGrps: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },

});

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;
