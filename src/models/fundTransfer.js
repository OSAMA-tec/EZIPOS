const mongoose = require('mongoose');

const fundTransferSchema = new mongoose.Schema({
  tranferFrom: { type: mongoose.Schema.Types.ObjectId, ref: 'AddAccount' },
  transferTo: { type: mongoose.Schema.Types.ObjectId, ref: 'AddAccount' },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  note: { type: String }, 
  
  // Add any additional fields as needed
});

const FundTransfer = mongoose.model('FundTransfer', fundTransferSchema);

module.exports = FundTransfer;
