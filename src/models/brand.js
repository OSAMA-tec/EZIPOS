const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  brandName: { type: String, required: true },
  shortDescription: { type: String }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
