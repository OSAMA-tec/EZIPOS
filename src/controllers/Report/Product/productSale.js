
const Sale = require('../../../models/addSale');

const Product = require('../../../models/addProduct');
//customer need

// Get product sell report data
const productSale=async (req, res) => {
  try {
    const products = await Product.find();
    const sales = await Sale.find().populate('productName').populate('customer');
    // const customers = await Customer.find();

    const reportData = sales.map(sale => {
      const product = products.find(p => p._id.equals(sale.productName._id));
    //   const customer = customers.find(c => c._id.equals(sale.customer._id));

      return {
        product: product.productName,
        sku: product.sku,
        // customerName: customer.name,
        // contactId: customer.contactId,
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

module.exports = {productSale};