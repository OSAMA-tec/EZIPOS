const mongoose = require('mongoose');

const expenseCategorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  categoryCode: { type: String, required: true },
  isSubCategory: { type: Boolean, default: false },//if true than parent category
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ExpenseCategory' }
});

const ExpenseCategory = mongoose.model('ExpenseCategory', expenseCategorySchema);

module.exports = ExpenseCategory;
