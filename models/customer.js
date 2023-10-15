const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    customerGroup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CustomerGroup'  
    },
    mobile: String,
    alternateContactNumber: String,
    openingBalance: Number,
    advanceBalance: Number,
    payTerm: String,  
    addressLine1: String,
    addressLine2: String,
    city: String, 
    state: String,
    country: String,
    zipCode: String,
  })
  
  const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
