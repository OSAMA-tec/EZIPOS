const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseOrderSchema = new Schema({
    supplier: {
        type: Schema.Types.ObjectId,
        ref: 'Contact', 
        required: true,
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:'Product'
    },
   
    
    orderDate: Date,
    deliveryDate: Date,
    businessLocation: String,
    paymentTerm: String,
    documents: [
        {
            documentFilePath: String,
        },
    ],
    shippingAddress: String,
    shippingCharges: {
        type: Number,
        default: 0.00,
    },
    shippingStatus: {
        type: String,
        enum: ['Not Shipped', 'Shipped', 'Delivered'],
        default: 'Not Shipped',
    },
    deliveredTo: String,
    expenseName: String,
    amount: {
        type: Number,
        default: 0,
    },
});





const PurchaseOrder = mongoose.model("PurchaseOrder", purchaseOrderSchema);
module.exports = PurchaseOrder;
