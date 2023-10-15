
const Sale = require('../../../models/addSale');

const Product = require('../../../models/addProduct');
//customer need

const moment = require('moment');

// Get product sell report data
const productSale = async (req, res) => {
  try {
    const { period } = req.body;
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
      // ... handle other cases similarly ...
      default:
        res.status(400).json({ error: 'Invalid period' });
        return;
    }

    const products = await Product.find();
    const sales = await Sale.find({
      saleDate: {
        $gte: startDate.toDate(),
        $lte: endDate.toDate()
      }
    }).populate('productName').populate('customer');

    const reportData = sales.map(sale => {
      const product = products.find(p => p._id.equals(sale.productName._id));

      return {
        product: product.productName,
        sku: product.sku,
        invoiceNumber: sale.invoiceNumber,
        date: sale.saleDate,
        quantity: sale.quantity,
        unitPrice: sale.unitPrice,
        discount: sale.discount,
        tax: sale.orderTax,
        priceIncTax: sale.amount,
        total: sale.subTotal
      };
    });

    res.json(reportData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { productSale };