const mongoose = require('mongoose');


const stocktransferSchema = new mongoose.Schema({


    date: { type: Date, default: Date.now },
    referenceNumber: { type: Number, required: true },
    status: { type: String, required: true },
    locationsFrom: { type: String, required: true },
    locationsTo: { type: String, required: true },

    productName: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 0 },
    unitPrice: { type: Number, default: 0.00 },
    //subtotal from front end
    shippingCharges:{ type: Number, default: 0 },
    additionalNotes:{ type: String },
    //Total amount from frontend

});

const StockTransfer = mongoose.model('StockTransfer', stocktransferSchema);

module.exports = StockTransfer;
