const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseDueSchema=new Schema({
    supplier: {
        type: Schema.Types.ObjectId,
        ref: 'Contact', 
        required: true,
    },
    ReferenceNo:Number,
    purchaseStatus:{
        type: String,
        enum: ['recieved', 'pending', 'ordered']
    },
    purchaseDate: Date,
    businessLocation: String,
    paymentTerm: String,
    documents: [
        {
            documentFilePath: String,
        },
    ],
    purchaseOrder:Number,
    product:{
        type:Schema.Types.ObjectId,
        ref:'Product'
    },
   discountType:{
    type:String,
    enum:['percentage','fixed']
   },
   discountAmount: Number,
   purchaseTax:Number,
   additionalNotes:String,
   shippingCharges: {
    type: Number,
    default: 0.00,
},
advanceBalnce:{
    type:Number,
    required:true
},
paidOn:{
type:Date,
required:true
},
paymentMethod:{
    type:String,
    enum:['advance','cash','card','cheque','Bank transfer','easypaisa','other','custom payment 6'],
    required:true
},
paymentAccount:{
    type:String
},
cardNumber:Number,
cardHolderNmae:String,
cardTransactionNo:Number,
cardType:{
    type:String,
    enum:['credit card','visa','debit card','MAster card']
},
Month:Number,
Year:Number,
securityCode:Number,
chequeNO:Number,
bankAccountNo:Number,
transactionNo:Number,
paymentNote:String,



});


const PurchaseesDue= mongoose.model("PurchasesDue", purchaseDueSchema);
module.exports = PurchaseesDue;
