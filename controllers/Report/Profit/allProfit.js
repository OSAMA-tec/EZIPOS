const AddExpense = require('../../../models/addExpense');
const Sale = require('../../../models/addSale');
const StockAdjustment = require('../../../models/addStockadjustment');
const StockTransfer = require('../../../models/addStocktransfer');
const Product = require('../../../models/addProduct');

const profitGet = async (req, res) => {
  try {
    const products = await Product.find();
    const sales = await Sale.find();
    const stockAdjustments = await StockAdjustment.find();
    const expenses = await AddExpense.find();
    const stockTransfers = await StockTransfer.find();


    const openingStockPurchasePrice = products.reduce((acc, product) => acc + product.purchasePrice, 0);
    const openingStockSalePrice = products.reduce((acc, product) => acc + product.sellingPrice, 0);
    const totalPurchase = sales.reduce((acc, sale) => acc + sale.unitPrice, 0);
    const totalSales = sales.reduce((acc, sale) => acc + sale.totalPrice, 0);
    const totalStockAdjustment = stockAdjustments.reduce((acc, adjustment) => acc + adjustment.totalamountRecovered, 0);
    const totalExpense = expenses.reduce((acc, expense) => acc + expense.totalAmount, 0);
    const totalPurchaseShippingCharge = stockTransfers.reduce((acc, transfer) => acc + transfer.shippingCharges, 0);
    const closingStockPurchasePrice = openingStockPurchasePrice - totalPurchase;
    const closingStockSalePrice = openingStockSalePrice - totalSales;
    let totalTransferShippingCharge = 0;
    let totalSellDiscount = 0;
    let totalCustomerReward = 0;
    let totalSellReturn = 0;
    let totalPayroll = 0;
    let totalProductionCost = 0;
    const grossProfit = totalSales - totalPurchase;
    const netProfit = grossProfit + totalPurchaseShippingCharge - totalStockAdjustment - totalExpense;
    // Calculate total purchase shipping charge
    expenses.forEach(expense => {
      if (expense.shippingCharges) {
        totalPurchaseShippingCharge += expense.shippingCharges;
      }
    });

    // Calculate total transfer shipping charge
    stockTransfers.forEach(transfer => {
      if (transfer.shippingCharges) {
        totalTransferShippingCharge += transfer.shippingCharges;
      }
    });

    sales.forEach(sale => {
      if (sale.discountAmount) {
        totalSellDiscount += sale.discountAmount;
      }
    });

    totalCustomerReward = totalSellDiscount;

    totalSellReturn = 0;

    totalPayroll = 0;
    totalProductionCost = 0;

    const report = {
      "Opening Stock (By purchase price)": openingStockPurchasePrice,
      "Opening Stock (By sale price)": openingStockSalePrice,
      "Total purchase (Exc. tax, Discount)": totalPurchase,
      "Total Stock Adjustment": totalStockAdjustment,
      "Total Expense": totalExpense,
      "Total purchase shipping charge": totalPurchaseShippingCharge,
      totalTransferShippingCharge,
      "Closing stock (By purchase price)": closingStockPurchasePrice,
      "Closing stock (By sale price)": closingStockSalePrice,
      "Total Sales (Exc. tax, Discount)": totalSales,
      "Gross Profit": grossProfit,
      "Net Profit": netProfit,
      totalSellDiscount,
      totalCustomerReward,
      totalSellReturn,
      totalPayroll,
      totalProductionCost
    };

    res.json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { profitGet };