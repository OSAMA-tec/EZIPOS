const mongoose = require('mongoose');


const paymentSchema = new mongoose.Schema({
    sale: {  
      type: mongoose.Schema.Types.ObjectId,  
      ref: 'Sale' 
    },
    amountPaid: { type: Number },
    paymentMethod: { type: String },
  })
  
  const Payment = mongoose.model('Payment', paymentSchema);
  
  module.exports = Payment;
  