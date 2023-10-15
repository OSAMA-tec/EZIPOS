const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
  roleName: { type: String, required: true },
  serviceStaff: {type: Boolean},
  viewExport: {type: Boolean},

  viewUser: {type: Boolean},
  addUser: {type: Boolean},
  editUser: {type: Boolean},
  deleteUser: {type: Boolean},

  viewRole: {type: Boolean},
  addRole: {type: Boolean},
  editRole: {type: Boolean},
  deleteRole: {type: Boolean},

  viewAllSupplier: {type: Boolean},
  viewOwnSupplier: {type: Boolean},
  addSupplier: {type: Boolean},
  editSupplier: {type: Boolean},
  deleteSupplier: {type: Boolean},

  viewAllCustomer: {type: Boolean},
  viewOwnCutomer: {type: Boolean},
  viewCustomerswithnosellfromonemonthonly: {type: Boolean},
  viewCustomerswithnosellfromthreemonthonly: {type: Boolean},
  viewCustomerswithnosellfromsixmonthonly: {type: Boolean},
  viewCustomerswithnosellfromoneyearonly: {type: Boolean},
  viewCustomersirrespectiveoftheirsell: {type: Boolean},
  addCustomer: {type: Boolean},
  editCustomer: {type: Boolean},
  deleteCustomer: {type: Boolean},

  viewProduct: {type: Boolean},
  addProduct: {type: Boolean},
  editProduct: {type: Boolean},
  deleteProduct: {type: Boolean},
  addOpeningStock: {type: Boolean},
  viewPurchasePrice: {type: Boolean},

  viewAllPurchaseStockAdjustment: {type: Boolean},
  viewOwnPurchaseStockAdjustment: {type: Boolean},
  addPurchaseStockAdjustment: {type: Boolean},
  editPurchaseStockAdjustment: {type: Boolean},
  deletePurchaseStockAdjustment: {type: Boolean},
  addPurchasePayment: {type: Boolean},
  editPurchasePayment: {type: Boolean},
  deletePurchasePayment: {type: Boolean},
  updateStatus: {type: Boolean},

  viewAllPurchaseOrder: {type: Boolean},
  viewOwnPurchaseOrder: {type: Boolean},
  createPurchaseOrder: {type: Boolean},
  editPurchaseOrder: {type: Boolean},
  deletePurchaseOrder: {type: Boolean},

  viewPossell: {type: Boolean},
  addPossell: {type: Boolean},
  editPossell: {type: Boolean},
  deletePossell: {type: Boolean},
  editProductpricefromposscreen: {type: Boolean},
  editProductdiscountfromposscreen: {type: Boolean},
  addeditPayment: {type: Boolean},
  printinvoice: {type: Boolean},

  viewAllSell: {type: Boolean},
  viewOwnSellOnly: {type: Boolean},
  viewPaidSellOnly: {type: Boolean},
  viewdueSellOnly: {type: Boolean},
  viewPartiallyPaidSellsOnly: {type: Boolean},
  viewOverDueSellsOnly: {type: Boolean},
  addSell: {type: Boolean},
  updateSell: {type: Boolean},
  deleteSell: {type: Boolean},

  // commissionagentcanviewtheirownsell: {type: Boolean},
  
  addSellPayment: {type: Boolean},
  editSellPayment: {type: Boolean},
  deleteSellPayment: {type: Boolean},
  editProductPriceFromSalesScreen: {type: Boolean},
  editProductDiscountFromSalesScreen: {type: Boolean},
  addEditDeleteDiscount: {type: Boolean},
  accessTypesOfService: {type: Boolean},
  accessAllSellReturn: {type: Boolean},
  accessOwnSellReturn: {type: Boolean},
  addEditInvoiceNumber: {type: Boolean},

  viewAllDrafts: {type: Boolean},
  viewOwnDrafts: {type: Boolean},
  editDraft: {type: Boolean},
  deleteDraft: {type: Boolean},

  viewAllQuotations: {type: Boolean},
  viewOwnQuotations: {type: Boolean},
  editQuotation: {type: Boolean},
  deleteQuotation: {type: Boolean},

  accessAllShipments: {type: Boolean},
  accessOwnShipments: {type: Boolean},
  // accessPendingShipmentsOnly: {type: Boolean},
  // commissionagentcanaccesstheirownshipments: {type: Boolean},

  viewCashRegister: {type: Boolean},
  closeCashRegister: {type: Boolean},

  viewBrand: {type: Boolean},
  addBrand: {type: Boolean},
  editBrand: {type: Boolean},
  deleteBrand: {type: Boolean},

  viewTaxRate: {type: Boolean},
  addTaxRate: {type: Boolean},
  editTaxRate: {type: Boolean},
  deleteTaxRate: {type: Boolean},

  viewUnit: {type: Boolean},
  addUnit: {type: Boolean},
  editUnit: {type: Boolean},
  deleteUnit: {type: Boolean},

  viewCategory: {type: Boolean},
  addCategory: {type: Boolean},
  editCategory: {type: Boolean},
  deleteCategory: {type: Boolean},

  viewPurchasesellreport: {type: Boolean},
  viewTaxreport: {type: Boolean},
  viewSuppliercustomerreport: {type: Boolean},
  viewExpensereport: {type: Boolean},
  viewProfitlossreport: {type: Boolean},
  viewStockreportstockadjustmentreportstockexpiryreport: {type: Boolean},
  viewTrendingproductreport: {type: Boolean},
  viewRegisterreport: {type: Boolean},
  viewSalesrepresentativereport: {type: Boolean},
  viewProductstockvalue: {type: Boolean},

  accessBusinessSettings: {type: Boolean},
  // accessbarcodesettings: {type: Boolean},
  accessInvoiceSettings: {type: Boolean},
  // accessprinters: {type: Boolean},

  accessAlleEpenses: {type: Boolean},
  viewOwnExpenseOnly: {type: Boolean},
  addExpense: {type: Boolean},
  editExpense: {type: Boolean},
  deleteExpense: {type: Boolean},

  viewHomeData: {type: Boolean},

  accessAccounts: {type: Boolean},
  editAccountTransaction: {type: Boolean},
  deleteAccountTransaction: {type: Boolean},

  // addeditviewallbookings: {type: Boolean},
  // addeditviewownbookings: {type: Boolean},

  defaultSellingPrice: {type: Boolean},
  retail: {type: Boolean},
  saleMan: {type: Boolean},
  localSale: {type: Boolean},
  minimumPrice: {type: Boolean},
  salePoint: {type: Boolean},

  //   //restaurant
  // accessTables: {type: Boolean},


//   addeditviewdeleteleavetype: {type: Boolean},
//   addeditviewdeleteallleave: {type: Boolean},
//   addviewownleave: {type: Boolean},
//   approveleave: {type: Boolean},
//   addeditviewdeleteallattendance: {type: Boolean},
//   viewownattendance: {type: Boolean},
//   allowuserstoentertheirownattendancefromweb: {type: Boolean},
//   allowuserstoentertheirownattendancefromapi: {type: Boolean},
//   viewpaycomponent: {type: Boolean},
//   addpaycomponent: {type: Boolean},
//   addeditviewdeletedepartment: {type: Boolean},
//   addeditviewdeletedesignation: {type: Boolean},
//   viewallpayroll: {type: Boolean},
//   addpayroll: {type: Boolean},
//   editpayroll: {type: Boolean},
//   deletepayroll: {type: Boolean},
//   assigntodotoothers: {type: Boolean},
//   addtodo: {type: Boolean},
//   edittodo: {type: Boolean},
//   deletetodo: {type: Boolean},
//   createmessage: {type: Boolean},
//   viewmessage: {type: Boolean},
//   accesssalestargets: {type: Boolean},

  viewRecipe: {type: Boolean},
  addRecipe: {type: Boolean},
  editRecipe: {type: Boolean},
  accessProduction: {type: Boolean},

//   createproject: {type: Boolean},
//   editproject: {type: Boolean},
//   deleteproject: {type: Boolean},

// //   servicestaff: {type: Boolean},

//   servicestaff: {type: Boolean},
//   servicestaff: {type: Boolean},
//   servicestaff: {type: Boolean},
//   servicestaff: {type: Boolean},
//   servicestaff: {type: Boolean},


});

const Role = mongoose.model('Role', rolesSchema);

module.exports = Role;
