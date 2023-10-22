const mongoose = require('mongoose');


const saleSchema = new mongoose.Schema({
    invoiceNumber: { type: String },
    customer: {  
      type: mongoose.Schema.Types.ObjectId,  
      ref: 'Customer' 
    },
    location: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'BusinessLocation' 
    }, 
    totalAmount: { type: Number },
  })
  
  const Sale = mongoose.model('sale', saleSchema);
  
  module.exports = Sale;
  