const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  accountNumber: { type: String, required: true },
  accountType: { type: String, required: true },
  openingBalance: { type: Number, required: true },
  accountDetails: [
    {
      label: { type: String },
      value: { type: String }
    }
  ],
  note: { type: String }
});

const AddAccount = mongoose.model('AddAccount', AccountSchema);

module.exports = AddAccount;
