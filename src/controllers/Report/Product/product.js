const Sale = require('../../../models/addSale');
const StockAdjustment = require('../../../models/addStockadjustment');
const StockTransfer = require('../../../models/addStocktransfer');
const Product = require('../../../models/addProduct');
// Get product purchase report data
const productPurchase=async (req, res) => {
  try {
    const products = await Product.find();
    const sales = await Sale.find().populate('productName').populate('customer');
    const stockAdjustments = await StockAdjustment.find().populate('productName');
    const stockTransfers = await StockTransfer.find().populate('productName');

    const reportData = products.map(product => {
      const productSales = sales.filter(sale => sale.productName._id.equals(product._id));
      const productStockAdjustments = stockAdjustments.filter(sa => sa.productName._id.equals(product._id));
      const productStockTransfers = stockTransfers.filter(st => st.productName._id.equals(product._id));

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