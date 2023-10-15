const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortName: { type: String },
  allowDecimal: { type: Boolean, default: false },
  timesBaseUnit: { type: Number },
  baseUnit: { type: String }

});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;
