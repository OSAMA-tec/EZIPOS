const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    locations: {type: String, required: true},
    sellingPrice: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    typeofService: {type: String},
    subscribe: { type: Boolean, default: false },
    customer:{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },

    //billing add
    //shipping add
    //Pay term
    saleDate: { type: Date, default: Date.now},
    status: {type: String, required: true},
    invoiceScheme: {type: String, required: true},
    invoiceNumber: { type: Number, required: true },



    orderStatus:{type: String, default: "Received"},
    //Attach doc
    //select table
    //select service staff
    
    productName: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    
    
    quantity: {type: Number, default: 0},
    unitPrice: {type: Number, default: 0.00},
    discount: {type: Number, default: 0.00},
    // total:unitPrice*quantity,
    // percent: (discount/100)*total,
    // subTotal: total-percent,

    discountType: {type: String},
    discountAmount: {type: Number},

    //Redeemed


    orderTax:{type: String},
    sellNote:{type: String},

    shippingDetails:{type: String},
    shippingAddress:{type: String},
    shippingCharges:{type: Number, default: 0.00},
    shippingStatus:{type: String, required: true},
    deliveredTo:{type: String},

    //shippingDocs


    amount: {type: Number},
    paidOn: { type: Date, default: Date.now},
    paymentMethod:{type: String, required: true},
    paymentAccount:{type: mongoose.Schema.Types.ObjectId, ref: 'PaymentAccount' },
    paymentNote:{type: String},



});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;
