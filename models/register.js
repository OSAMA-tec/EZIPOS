const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  openTime: { type: Date },
  closeTime: { type: Date },
  location: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'BusinessLocation' 
  },
  user: {  
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'AddUser' 
  },
  totalCardSlips: { type: Number, default: 0 },
  totalCheques: { type: Number, default: 0 },
  totalCash: { type: Number, default: 0 },
  totalBankTransfer: { type: Number, default: 0 },
  totalAdvancePayment: { type: Number, default: 0 },
  easyPaisa: { type: Number, default: 0 },
  customPayment2: { type: Number, default: 0 },
  customPayment3: { type: Number, default: 0 },
  otherPayments: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  action: { type: String }
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
