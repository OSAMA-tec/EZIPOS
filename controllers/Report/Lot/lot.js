const Sale = require('../../../models/addSale');
const StockAdjustment = require('../../../models/addStockadjustment');
const StockTransfer = require('../../../models/addStocktransfer');
const Product = require('../../../models/addProduct');


const getLotReport = async (req, res) => {
    try {
      const products = await Product.find();
      
      const lotReportData = products.map(product => {
        let totalSold = 0;
        let totalAdjusted = 0;
        product.openingStock.forEach(lot => {
          totalSold += Sale.find({
            product: product._id,
            lotNumber: lot.lotNumber 
          }).count();
          totalAdjusted += StockAdjustment.find({
            product: product._id,
            lotNumber: lot.lotNumber 
          }).count();
        });
        return {
          SKU: product.SKU,
          product: product.productName,
          lots: product.openingStock,
          totalSold,
          totalAdjusted,
          currentStock: getCurrentStock(product)
        }
      });
      
      res.json(lotReportData);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error'); 
    }
  }
  
  function getCurrentStock(product) {
    let currentStock = 0;
    product.openingStock.forEach(lot => {
      currentStock += lot.quantityRemaining; 
      currentStock -= Sale.find({ 
        product: product._id,
        lotNumber: lot.lotNumber  
      }).count();   
      currentStock += StockAdjustment.find({
        product: product._id, 
        lotNumber: lot.lotNumber  
      }).count();   
    });
    return currentStock;
  }
  

  module.exports={getLotReport}