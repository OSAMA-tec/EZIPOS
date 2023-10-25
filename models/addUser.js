const mongoose = require('mongoose');

const addUserSchema = new mongoose.Schema({


    prefix: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cPassword: { type: String, required: true },
    allowLogin: {type: Boolean, default: true},
    
    
    
    // ROLES
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },


    dateOfBirth: { type: Date, default: Date.now},
    gender: { type: String, required: true },
    maritalStatus: { type: String },
    bloodGroup: { type: String },
    mobileNumber: { type: Number, required: true },
    alternateContactNumber: { type: Number },
    familyContactNumber: { type: Number },
    facebookLink: { type: String },
    twitterLink: { type: String },


    //6 fields like customerfield 1,2,3,4 and social media 1,2

    idProofName: { type: String },
    idProofNumber: { type: Number },

    permanentAddress: { type: String },
    currentAddress: { type: String },

    //Bank details

    accountHolderName: { type: String, required: true },
    accountNumber: { type: Number, required: true },
    bankName: { type: String, required: true },
    bankIdentifierCode: { type: Number, required: true },
    branch: { type: String, required: true },
    taxPayerId: { type: Number, required: true },

    //HRM and Payroll


});

const AddUser = mongoose.model('AddUser', addUserSchema);

module.exports = AddUser;
