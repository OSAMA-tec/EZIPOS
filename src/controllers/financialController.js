const FundTransfer = require('../models/fundTransfer');
const FundDeposit = require('../models/fundDeposit');
const Account = require('../models/addAccount');
const Supplier = require('../models/addSupplier');  //By Member 2
const Customer = require('../models/addCustomer');  //By member 2
const Purchase = require('../models/addPurchase');  //By member 2
const Sale = require('../models/addSale');
const Expense = require('../models/addExpense');

async function calculateSupplierDue() {
  try {
    const supplierData = await Supplier.aggregate([
      {
        $group: {
          _id: null,
          totalPurchaseDue: { $sum: '$totalPurchaseDue' },
          totalPurchaseReturnDue: { $sum: '$totalPurchaseReturnDue' },
        },
      },
    ]);

    if (supplierData.length === 0) {
      return 0;
    }

    const netSupplierDue = supplierData[0].totalPurchaseDue - supplierData[0].totalPurchaseReturnDue;

    return netSupplierDue;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function calculateCustomerDue() {
  try {
    const customerData = await Customer.aggregate([
      {
        $group: {
          _id: null,
          totalSalesDue: { $sum: '$totalSalesDue' },
          totalSalesReturnDue: { $sum: '$totalSalesReturnDue' },
        },
      },
    ]);

    if (customerData.length === 0) {
      return 0;
    }

    const netCustomerDue = customerData[0].totalSalesDue - customerData[0].totalSalesReturnDue;

    return netCustomerDue;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

exports.getBalanceSheet= async (req, res) => {
  try {
    const supplierDue = await calculateSupplierDue();
    const customerDue = await calculateCustomerDue();
    const accounts = await Account.find();
    const name = accounts.name;
    const balance = accounts.openingBalance;

    const balanceSheet = {
      supplierDue,
      customerDue,
      name,
      balance,
    };

    res.status(200).json(balanceSheet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getCashFlow= async (req, res) => {
  try {
    const purchaseData = await Purchase.find({ paymentAccount: { $ne: null } });
    const saleData = await Sale.find({ paymentAccount: { $ne: null } });
    const expenseData = await Expense.find({ paymentAccount: { $ne: null } });
    const fundTransferData = await FundTransfer.find();
    const fundDepositData = await FundDeposit.find();

    const cashFlowData = {
      purchases: purchaseData,
      sales: saleData,
      expenses: expenseData,
      fundTransfers: fundTransferData,
      fundDeposits: fundDepositData,
    };

    res.status(200).json(cashFlowData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getPaymentAccountReport= async (req, res) => {
  try {
    const purchaseTransactions = await Purchase.find({ paymentMethod: { $ne: null } });
    const saleTransactions = await Sale.find({ paymentMethod: { $ne: null } });
    const expenseTransactions = await Expense.find({ paymentMethod: { $ne: null } });

    const paymentAccountReportData = {
      purchases: purchaseTransactions,
      sales: saleTransactions,
      expenses: expenseTransactions,
    };

    res.status(200).json(paymentAccountReportData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

