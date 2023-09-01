const mongoose = require('mongoose');

const variationSchema = new mongoose.Schema({
  variationName: { type: String, required: true },
  variationValue: { type: mongoose.Schema.Types.Mixed } // Allow string or number
});

const Variation = mongoose.model('Variation', variationSchema);

module.exports = Variation;
