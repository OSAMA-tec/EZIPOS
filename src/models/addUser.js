const mongoose = require('mongoose');

const addUserSchema = new mongoose.Schema({

    // name: { type: String, required: true },
    // startDate: { type: Date, required: true },
    // currency: { type: String, required: true },
    // logo: { type: String },
    // website: { type: String },
    // contactNumber: { type: Number },
    // alternateContactNumber: { type: String },
    // country: { type: String },
    // state: { type: String },
    // city: { type: String },
    // zipCode: { type: Number },
    // landmark: { type: String },
    // timeZone: { type: String },


    // tax1Name: { type: String },
    // tax1No: { type: String },
    // tax2Name: { type: String },
    // tax2No: { type: String },
    // financialYearStartMonth: { type: String },
    // stockAccountingMethod: { type: String, enum: ['FIFO', 'LIFO'] },


    prefix: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cpassword: { type: String, required: true },
    allowLogin: {type: Boolean, required: true},
    
    
    
    // ROLES
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }, // Reference to the Role collection


    allLocations: {type: Boolean, required: true},
    eziline: {type: Boolean, required: true},


    salescommissionpercentage: { type: String, required: true },
    maxsalesdiscountpercent: { type: String, required: true },
    
    
    // allowselectedcontacts: {type: Boolean, required: true},


    dateOfBirth: { type: Date, default: Date.now},
    gender: { type: String, required: true },
    maritalstatus: { type: String, required: true },
    bloodgroup: { type: String, required: true },
    mobilenumber: { type: Number, required: true },
    altmobilenumber: { type: Number, required: true },
    famcontactnumber: { type: Number, required: true },
    facebook: { type: String },
    twitter: { type: String },


    //6 fields like customerfield 1,2,3,4 and social media 1,2

    idname: { type: String, required: true },
    address: { type: String },
    curraddress: { type: String },

    //Bank details

    accholdername: { type: String, required: true },
    accnumber: { type: Number, required: true },
    bankname: { type: String, required: true },
    bankidcode: { type: Number, required: true },
    branch: { type: String, required: true },
    taxpayerid: { type: Number, required: true },

    //HRM and Payroll


});

const AddUser = mongoose.model('AddUser', addUserSchema);

module.exports = AddUser;
