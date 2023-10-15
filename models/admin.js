const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    businessName: { type: String, required: true },
    startDate: { type: Date, required: true, default: Date.now},
    currency: { type: String, required: true },
    logo: { type: String },
    website: { type: String },
    contactNumber: { type: Number },
    alternateContactNumber: { type: Number },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    zipCode: { type: Number },
    landmark: { type: String },
    timeZone: { type: String },


    tax1Name: { type: String },
    tax1No: { type: Number },
    tax2Name: { type: String },
    tax2No: { type: Number },
    financialYearStartMonth: { type: String },
    stockAccountingMethod: { type: String, enum: ['First in First Out', 'Last in First Out'] },


    prefix: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cpassword: { type: String, required: true }

});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
