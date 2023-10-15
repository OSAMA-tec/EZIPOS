const mongoose = require('mongoose');

const draftSchema = new mongoose.Schema({
    businesLocation: { type: String },
    sellingPrice: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    typeofService: { type: String },
    // customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    customer: { type:String },

    //billing add
    //shipping add
    payTerm: { type: String },
    salesDate: { type: Date, default: Date.now },
    status: { type: String, required: true },
    // invoiceSchema: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' },//from invoice schema
    invoiceNumber: { type: Number },



    // orderStatus:{type: String, default: "Received"},  was for kitchen tab
    //Attach doc
    //select table
    //select service staff

    inputData: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 0 },
            unitPrice: { type: Number, default: 0.00 },
            discount: { type: Number, default: 0.00 },
            subtotal: { type: Number }
        }],

        totalSaleAmount:{ type: Number },

    // total:unitPrice*quantity,
    // percent: (discount/100)*total,
    // subTotal: total-percent,

    discountType: { type: String },
    discountAmount: { type: Number },

    //Redeemed


    orderTaxType: { type: String },
    orderTax: { type: Number },
    sellNote: { type: String },

    shippingDetails: { type: String },
    shippingAddress: { type: String },
    shippingCharges: { type: Number, default: 0.00 },
    shippingStatus: { type: String },
    deliveredTo: { type: String },


    additionalExpenseName: { type: String },
    additionalExpenseAmount: { type: Number },
    additionalExpenseName1: { type: String },
    additionalExpenseAmount1: { type: Number },
    additionalExpenseName2: { type: String },
    additionalExpenseAmount2: { type: Number },
    additionalExpenseName3: { type: String },
    additionalExpenseAmount3: { type: Number },
    //shippingDocs


    amount: { type: Number },
    paymentDate: { type: Date, default: Date.now },
    paymentMethod: { type: String },
    // paymentAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'PaymentAccount' },
    paymentNote: { type: String },




});

const Draft = mongoose.model('Draft', draftSchema);

module.exports = Draft;
