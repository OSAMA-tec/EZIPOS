const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  currentInvoiceNumber: { type: Number, default: 1 }, // Initialize with the starting value
  invoiceNumberFormat: { type: String, enum: ['####', '2023-####'], default: '####' },
  namePrefix: String,
  startFrom:  { type: Number, default: 1 }, // New field for specifying the starting number
  numberOfDigits:  { type: Number, default: 4 }, // New field for specifying the number of digits
  setAsDefault: {
    type: Boolean,
    default: false,
  }, 

});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
