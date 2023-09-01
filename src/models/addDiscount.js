const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  products: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
//   unit: { type: String},
  location: { type: String },
  priority: { type: Number },
  discountType: {type: String},
  discountAmount: {type: Number},
  startAt: { type: Date},
  endAt: { type: Date},
  sellingPrice: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },

  applyincustomerGroup: { type: Boolean, default: false },
  isActive: { type: Boolean },

});

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;
