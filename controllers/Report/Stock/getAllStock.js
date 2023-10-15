
const Sale = require('../../../models/addSale');
const StockAdjustment = require('../../../models/addStockadjustment');
const StockTransfer = require('../../../models/addStocktransfer');
const Product = require('../../../models/addProduct');
async function calculateReportData() {
  const products = await Product.find().populate('unit');
  const stockAdjustments = await StockAdjustment.find().populate('productName');
  const stockTransfers = await StockTransfer.find().populate('productName');
  const sales = await Sale.find().populate('productName');

  const reportData = products.map(product => {
    const productSales = sales.filter(sale => sale.productName._id.equals(product._id));
    const productStockAdjustments = stockAdjustments.filter(sa => sa.productName._id.equals(product._id));
    const productStockTransfers = stockTransfers.filter(st => st.productName._id.equals(product._id));

    const totalUnitSold = productSales.reduce((sum, sale) => sum + sale.quantity, 0);
    const totalUnitAdjusted = productStockAdjustments.reduce((sum, adjustment) => sum + adjustment.quantity, 0);
    const totalUnitTransfered = productStockTransfers.reduce((sum, transfer) => sum + transfer.quantity, 0);

    const currentStock = totalUnitSold - totalUnitAdjusted - totalUnitTransfered;
    const currentStockValueByPurchasePrice = currentStock * product.unitPrice;
    const currentStockValueBySalePrice = currentStock * product.sellingPrice;
    const potentialProfit = currentStockValueBySalePrice - currentStockValueByPurchasePrice;
    const profitMarginPercentage = (potentialProfit / currentStockValueBySalePrice) * 100;

    return {
      action: 'Action',
      sku: product.sku,
      product: product.productName,
      variation: 'Variation', //
      category: 'Category', //
      location: 'Location', //
      unitSellingPrice: product.sellingPrice,
      currentStock,
      currentStockValueByPurchasePrice,
      currentStockValueBySalePrice,
      potentialProfit,
      profitMarginPercentage,
      totalUnitSold,
      totalUnitTransfered,
      totalUnitAdjusted,
      customField1: 'Custom Field 1', //
      customField2: 'Custom Field 2', //
      customField3: 'Custom Field 3', //
      customField4: 'Custom Field 4', //
      currentStockManufacturing: 'Current Stock (Manufacturing)', //
    };
  });

  const closingStockByPurchasePrice = reportData.reduce((sum, item) => sum + item.currentStockValueByPurchasePrice, 0);
  const closingStockBySalePrice = reportData.reduce((sum, item) => sum + item.currentStockValueBySalePrice, 0);
  const totalPotentialProfit = reportData.reduce((sum, item) => sum + item.potentialProfit, 0);
  const totalProfitMarginPercentage = (totalPotentialProfit / closingStockBySalePrice) * 100;

  return {
    closingStockByPurchasePrice,
    closingStockBySalePrice,
    totalPotentialProfit,
    totalProfitMarginPercentage,
    reportData,
  };
}

const stockReport= async (req, res) => {
  try {
    const reportData = await calculateReportData();
    res.json(reportData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating stock report');
  }
};



module.exports={stockReport}