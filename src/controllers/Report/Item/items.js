
const Sale = require('../../../models/addSale');
const Product = require('../../../models/addProduct');

// Get items report data
const itemsReport= async (req, res) => {
  try {
    const products = await Product.find();
    const sales = await Sale.find().populate('productName').populate('customer');

    const reportData = products.map(product => {
      const productSales = sales.filter(sale => sale.productName._id.equals(product._id));

      return productSales.map(sale => ({
        product: product.productName,
        sku: product.sku,
        description: product.productDescription,
        purchaseDate: sale.saleDate,
        purchase: sale.invoiceNumber,
        lotNumber: '',
        supplier: '', 
        purchasePrice: product.unitPrice,
        sellDate: sale.saleDate,
        sale: sale.invoiceNumber,
        customer: sale.customer.name,
        location: sale.locations,
        sellQuantity: sale.quantity,
        sellingPrice: sale.unitPrice,
        subtotal: sale.subTotal
      }));
    }).flat();

    res.json(reportData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {itemsReport};