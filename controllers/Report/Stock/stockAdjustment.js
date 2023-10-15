

const stockAdjustment = require('../../../models/addStockadjustment');
const StockTransfer = require('../../../models/addStocktransfer');
const Product = require('../../../models/addProduct');
const StockAdjustment= async (req, res) => {
  try {
    const products = await Product.find();
    const stockAdjustments = await stockAdjustment.find().populate('productName');
    const stockTransfers = await StockTransfer.find().populate('productName');

    const reportData = products.map(product => {
      const productStockAdjustments = stockAdjustments.filter(sa => sa.productName._id.equals(product._id));
      const productStockTransfers = stockTransfers.filter(st => st.productName._id.equals(product._id));

      const totalUnitAdjusted = productStockAdjustments.reduce((sum, adjustment) => sum + adjustment.quantity, 0);

      return {
        sku: product.sku,
        product: product.productName,
        lotNumber: 'Lot Number', //
        expDate: 'EXP Date', //
        currentStock: 'Current Stock', //
        totalUnitSold: 'Total Unit Sold', //
        totalUnitAdjusted,
      };
    });

    res.json(reportData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {StockAdjustment};