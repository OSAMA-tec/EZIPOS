const mongoose = require('mongoose');

const warrantySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  duration: { type: String } // You can store duration as a string, e.g., "1 year"
});

const Warranty = mongoose.model('Warranty', warrantySchema);

module.exports = Warranty;
