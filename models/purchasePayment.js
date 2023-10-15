const mongoose = require('mongoose');

const purchasePaymentSchema = new mongoose.Schema({
referenceNo: {
type: String,
required: true
},
paidOn: {
type: Date,
required: true

},
amount: {
type: Number,
required: true
},
supplier: {
type: mongoose.Schema.Types.ObjectId,

ref: 'Supplier'
},
paymentMethod: {
type: String,
required: true,
enum: ['cash', 'card', 'cheque', 'bank transfer', 'easypaisa', 'other']
},
purchase: {
type: mongoose.Schema.Types.ObjectId,

ref: 'PurchaseOrder'

},
paymentNote: {
type: String

}
});

const PurchasePayment = mongoose.model('PurchasePayment', purchasePaymentSchema);

module.exports = PurchasePayment;