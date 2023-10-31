const mongoose = require('mongoose');
const { Schema } = mongoose;

const customLabelSchema = new Schema({
  labelFor: {
    type: String,
  },
  labelCode: {
    type: String,
  },
  inputValue: {
    type: String,
  },
  customFieldNumber: {
    type: Number,
  },
  Type: {
    type: String,
  },
});

const CustomLabel = mongoose.model('CustomLabel', customLabelSchema);
module.exports = CustomLabel;