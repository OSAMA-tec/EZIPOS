const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  businessLocation: { type: String, required: true },
  expenseCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ExpenseCategory', required: true },
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ExpenseCategory' },
  referenceNumber: { type: String, required: true },
  date: { type: Date, required: true },
  expenseFor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  expenseForContact: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: ['Supplier', 'Customer']
    }
  ],
  applicableTax: { type: Number },
  totalAmount: { type: Number, required: true },
  expenseNote: { type: String }
});

const AddExpense = mongoose.model('AddExpense', expenseSchema);

module.exports = AddExpense;
