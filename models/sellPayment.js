const mongoose = require('mongoose');

const sellPaymentSchema = new mongoose.Schema({
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
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    customerGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CustomerGroup'
    },
    paymentMethod: {
        type: String,
        required: true
    },
    sell: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sell',
        required: true
    }
})


const sellPayment = mongoose.model('sellPayment', sellPaymentSchema);

module.exports = sellPayment;