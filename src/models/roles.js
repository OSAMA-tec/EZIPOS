const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  servicestaff: {type: Boolean},
  viewexport: {type: Boolean},

  viewuser: {type: Boolean},
  adduser: {type: Boolean},
  edituser: {type: Boolean},
  deleteuser: {type: Boolean},

  viewrole: {type: Boolean},
  addrole: {type: Boolean},
  editrole: {type: Boolean},
  deleterole: {type: Boolean},

  viewallsupplier: {type: Boolean},
  viewownsupplier: {type: Boolean},
  addsupplier: {type: Boolean},
  editsupplier: {type: Boolean},
  deletesupplier: {type: Boolean},

  viewallcustomer: {type: Boolean},
  viewowncutomer: {type: Boolean},
  viewcustomerswithnosellfromonemonthonly: {type: Boolean},
  viewcustomerswithnosellfromthreemonthonly: {type: Boolean},
  viewcustomerswithnosellfromsixmonthonly: {type: Boolean},
  viewcustomerswithnosellfromoneyearonly: {type: Boolean},
  viewcustomersirrespectiveoftheirsell: {type: Boolean},
  addcustomer: {type: Boolean},
  editcustomer: {type: Boolean},
  deletecustomer: {type: Boolean},

  viewproduct: {type: Boolean},
  addproduct: {type: Boolean},
  editproduct: {type: Boolean},
  deleteproduct: {type: Boolean},
  addopeningstock: {type: Boolean},
  viewpurchaseprice: {type: Boolean},

  viewallpurchasestockadjustment: {type: Boolean},
  viewownpurchasestockadjustment: {type: Boolean},
  addpurchasestockadjustment: {type: Boolean},
  editpurchasestockadjustment: {type: Boolean},
  deletepurchasestockadjustment: {type: Boolean},
  addpurchasepayment: {type: Boolean},
  editpurchasepayment: {type: Boolean},
  deletepurchasepayment: {type: Boolean},
  updatestatus: {type: Boolean},

  viewallpurchaseorder: {type: Boolean},
  viewownpurchaseorder: {type: Boolean},
  createpurchaseorder: {type: Boolean},
  editpurchaseorder: {type: Boolean},
  deletepurchaseorder: {type: Boolean},

  viewpossell: {type: Boolean},
  addpossell: {type: Boolean},
  editpossell: {type: Boolean},
  deletepossell: {type: Boolean},
  editproductpricefromposscreen: {type: Boolean},
  editproductdiscountfromposscreen: {type: Boolean},
  addeditpayment: {type: Boolean},
  printinvoice: {type: Boolean},

  viewallsell: {type: Boolean},
  viewownsellonly: {type: Boolean},
  viewpaidsellonly: {type: Boolean},
  viewduesellonly: {type: Boolean},
  viewpartiallypaidsellsonly: {type: Boolean},
  viewoverduesellsonly: {type: Boolean},
  addsell: {type: Boolean},
  updatesell: {type: Boolean},
  deletesell: {type: Boolean},

  commissionagentcanviewtheirownsell: {type: Boolean},
  
  addsellpayment: {type: Boolean},
  editsellpayment: {type: Boolean},
  deletesellpayment: {type: Boolean},
  editproductpricefromsalesscreen: {type: Boolean},
  editproductdiscountfromsalesscreen: {type: Boolean},
  addeditdeletediscount: {type: Boolean},
  accesstypesofservice: {type: Boolean},
  accessallsellreturn: {type: Boolean},
  accessownsellreturn: {type: Boolean},
  addeditinvoicenumber: {type: Boolean},

  viewalldrafts: {type: Boolean},
  viewowndrafts: {type: Boolean},
  editdraft: {type: Boolean},
  deletedraft: {type: Boolean},

  viewallquotations: {type: Boolean},
  viewownquotations: {type: Boolean},
  editquotation: {type: Boolean},
  deletequotation: {type: Boolean},

  accessallshipments: {type: Boolean},
  accessownshipments: {type: Boolean},
  accesspendingshipmentsonly: {type: Boolean},
  commissionagentcanaccesstheirownshipments: {type: Boolean},

  viewcashregister: {type: Boolean},
  closecashregister: {type: Boolean},

  viewbrand: {type: Boolean},
  addbrand: {type: Boolean},
  editbrand: {type: Boolean},
  deletebrand: {type: Boolean},

  viewtaxrate: {type: Boolean},
  addtaxrate: {type: Boolean},
  edittaxrate: {type: Boolean},
  deletetaxrate: {type: Boolean},

  viewunit: {type: Boolean},
  addunit: {type: Boolean},
  editunit: {type: Boolean},
  deleteunit: {type: Boolean},

  viewcategory: {type: Boolean},
  addcategory: {type: Boolean},
  editcategory: {type: Boolean},
  deletecategory: {type: Boolean},

  viewpurchasesellreport: {type: Boolean},
  viewtaxreport: {type: Boolean},
  viewsuppliercustomerreport: {type: Boolean},
  viewexpensereport: {type: Boolean},
  viewprofitlossreport: {type: Boolean},
  viewstockreportstockadjustmentreportstockexpiryreport: {type: Boolean},
  viewtrendingproductreport: {type: Boolean},
  viewregisterreport: {type: Boolean},
  viewsalesrepresentativereport: {type: Boolean},
  viewproductstockvalue: {type: Boolean},

  accessbusinesssettings: {type: Boolean},
  accessbarcodesettings: {type: Boolean},
  accessinvoicesettings: {type: Boolean},
  accessprinters: {type: Boolean},

  accessallexpenses: {type: Boolean},
  viewownexpenseonly: {type: Boolean},
  addexpense: {type: Boolean},
  editexpense: {type: Boolean},
  deleteexpense: {type: Boolean},

  viewhomedata: {type: Boolean},

  accessaccounts: {type: Boolean},
  editaccounttransaction: {type: Boolean},
  deleteaccounttransaction: {type: Boolean},

  addeditviewallbookings: {type: Boolean},
  addeditviewownbookings: {type: Boolean},

  defaultsellingprice: {type: Boolean},
  spg: {type: Boolean},

    //restaurant
  accesstables: {type: Boolean},


  addeditviewdeleteleavetype: {type: Boolean},
  addeditviewdeleteallleave: {type: Boolean},
  addviewownleave: {type: Boolean},
  approveleave: {type: Boolean},
  addeditviewdeleteallattendance: {type: Boolean},
  viewownattendance: {type: Boolean},
  allowuserstoentertheirownattendancefromweb: {type: Boolean},
  allowuserstoentertheirownattendancefromapi: {type: Boolean},
  viewpaycomponent: {type: Boolean},
  addpaycomponent: {type: Boolean},
  addeditviewdeletedepartment: {type: Boolean},
  addeditviewdeletedesignation: {type: Boolean},
  viewallpayroll: {type: Boolean},
  addpayroll: {type: Boolean},
  editpayroll: {type: Boolean},
  deletepayroll: {type: Boolean},
  assigntodotoothers: {type: Boolean},
  addtodo: {type: Boolean},
  edittodo: {type: Boolean},
  deletetodo: {type: Boolean},
  createmessage: {type: Boolean},
  viewmessage: {type: Boolean},
  accesssalestargets: {type: Boolean},

  viewrecipe: {type: Boolean},
  addrecipe: {type: Boolean},
  editrecipe: {type: Boolean},
  accessproduction: {type: Boolean},

  createproject: {type: Boolean},
  editproject: {type: Boolean},
  deleteproject: {type: Boolean},

//   servicestaff: {type: Boolean},

//   servicestaff: {type: Boolean},
//   servicestaff: {type: Boolean},
//   servicestaff: {type: Boolean},
//   servicestaff: {type: Boolean},
//   servicestaff: {type: Boolean},


});

const Role = mongoose.model('Role', rolesSchema);

module.exports = Role;
