const mongoose = require('mongoose');
const sellSchema = new mongoose.Schema({
    invoiceNumber: {
      type: String,
      required: true
    }, 
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true 
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    inputData: [{
      product: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product'
      },
      quantity: Number,
      unitPrice: Number,
      discount: Number,
      subtotal: Number  
    }],
    totalAmount: {
      type: Number,
      required: true  
    },
    discountType: String,
    discountAmount: Number,
    orderTaxType: String,
    orderTax: Number,
    sellNote: String,
  })
  
  const Sell = mongoose.model('Sell', sellSchema);

module.exports = Sell;