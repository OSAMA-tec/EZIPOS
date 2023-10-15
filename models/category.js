const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  categoryCode: { type: String },
  description: { type: String },
  parentCategory: { type: String }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
