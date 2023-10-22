const sale = require('../../../models/Sale');
const Payment = require('../../../models/payment');
const Customer = require('../../../models/customer');

const getSalesReport = async (req, res) => {
  try {
    const sales = await Sale.find()
      .populate('customer', 'name')
      .populate('location', 'name'); 

    const payments = await Payment.find()
      .populate('sale'); // Populate sale details

    const report = sales.map(sale => {
      const payment = payments.find(payment => payment.sale._id.toString() === sale._id.toString());
      return {
        date: sale.createdAt, // Assuming the Sale schema has a createdAt field
        invoiceNumber: sale.invoiceNumber,
        customerName: sale.customer.name,
        location: sale.location.name,
        paymentStatus: payment ? 'Paid' : 'Due',
        totalAmount: sale.totalAmount,
        totalPaid: payment ? payment.amountPaid : 0,
        totalRemaining: payment ? sale.totalAmount - payment.amountPaid : sale.totalAmount
      };
    });

    res.json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports={getSalesReport}