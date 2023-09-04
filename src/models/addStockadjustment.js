const mongoose = require('mongoose');


const stockadjustmentSchema = new mongoose.Schema({

    locations: { type: String, required: true },
    referenceNumber: { type: Number, required: true },

    date: { type: Date, default: Date.now },
    adjustmentType: { type: String, required: true },
  

    productName: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 0 },
    unitPrice: { type: Number, default: 0.00 },
    //subtotal from front end
    totalamountRecovered:{ type: Number, default: 0 },
    reason:{ type: String },
    //Total amount from frontend

});

const StockAdjustment = mongoose.model('StockAdjustment', stockadjustmentSchema);

module.exports = StockAdjustment;
