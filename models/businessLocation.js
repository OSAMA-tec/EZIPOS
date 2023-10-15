
const mongoose = require('mongoose');

const businessLocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  locationID: String,
  landmark: String,
  city: { type: String, required: true },
  zipCode: { type: Number, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  mobileNo: String,
  altContactNo: String,
  email: String,
  website: String,
  invoiceScheme: { type: mongoose.Schema.Types.ObjectId, ref: 'InvoiceScheme' },
  defaultSellingPriceGroup: { type: mongoose.Schema.Types.ObjectId, ref: 'SellingPriceGroup' },
  featuredProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  
  cash:[
    {
      enabled: { type: Boolean, default: true },
      defaultAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'AddAccount' },
    },
  ],
  card:[
    {
      enabled: { type: Boolean, default: true },
      defaultAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'AddAccount' },
    },
  ],
  cheque:[
    {
      enabled: { type: Boolean, default: true },
      defaultAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'AddAccount' },
    },
  ],
  bankTransfer:[
    {
      enabled: { type: Boolean, default: true },
      defaultAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'AddAccount' },
    },
  ],
  other:[
    {
      enabled: { type: Boolean, default: true },
      defaultAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'AddAccount' },
    },
  ],
  easyPaisa:[
    {
      enabled: { type: Boolean, default: true },
      defaultAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'AddAccount' },
    },
  ],
});

const BusinessLocation = mongoose.model('BusinessLocation', businessLocationSchema);

module.exports = BusinessLocation;
