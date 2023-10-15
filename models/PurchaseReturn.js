const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseReturnSchema=new Schema({
    supplier: {
        type: Schema.Types.ObjectId,
        ref: 'Contact', 
        required: true,
    },
    businessLocation: String,
    ReferenceNo:Number,
    Date: Date,
    documents: [
        {
            documentFilePath: String,
        }
    ],
    product:{
        type:Schema.Types.ObjectId,
        ref:'Product'
    }


});



const PurchaseReturn= mongoose.model("PurchaseReturn", purchaseReturnSchema);
module.exports = PurchaseReturn;

