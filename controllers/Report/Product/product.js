const Sale = require('../../../models/addSale');
const StockAdjustment = require('../../../models/addStockadjustment');
const StockTransfer = require('../../../models/addStocktransfer');
const Product = require('../../../models/addProduct');
const moment = require('moment');

// Get product purchase report data
const productPurchase = async (req, res) => {
  try {
    const period = req.body.period;
    let startDate, endDate;

    switch (period) {
      case 'Today':
        startDate = moment().startOf('day');
        endDate = moment().endOf('day');
        break;
      case 'Yesterday':
        startDate = moment().subtract(1, 'days').startOf('day');
        endDate = moment().subtract(1, 'days').endOf('day');
        break;
      case 'Last 7 Days':
        startDate = moment().subtract(7, 'days').startOf('day');
        endDate = moment().endOf('day');
        break;
      // Add the remaining cases...
      default:
        startDate = moment().startOf('year');
        endDate = moment().endOf('year');
    }

    const products = await Product.find();
    const sales = await Sale.find({ saleDate: { $gte: startDate.toDate(), $lte: endDate.toDate() } }).populate('productName').populate('customer');
    const stockAdjustments = await StockAdjustment.find({ date: { $gte: startDate.toDate(), $lte: endDate.toDate() } }).populate('productName');
    const stockTransfers = await StockTransfer.find({ date: { $gte: startDate.toDate(), $lte: endDate.toDate() } }).populate('productName');

    const reportData = products.map(product => {
      const productSales = sales.filter(sale => sale.productName._id.equals(product._id));
      const productStockAdjustments = stockAdjustments.filter(sa => sa.productName._id.equals(product._id));
      const productStockTransfers = stockTransfers.filter(st => st.productName._id.equals(product._id));

      // If there are no sales, stock adjustments, or stock transfers for this product, return an empty array
      if (productSales.length === 0 && productStockAdjustments.length === 0 && productStockTransfers.length === 0) {
        return [];
      }

      return productSales.map(sale => ({
        product: product.productName,
        sku: product.sku,
        supplier: '', // Add supplier if available in your schema
        referenceNumber: sale.invoiceNumber,
        date: sale.saleDate,
        quantity: sale.quantity,
        totalUnitAdjusted: productStockAdjustments.reduce((sum, adjustment) => sum + adjustment.quantity, 0),
        unitPurchasePrice: product.unitPrice,
        subtotal: sale.subTotal
      }));
    }).flat();

    res.json(reportData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {productPurchase};