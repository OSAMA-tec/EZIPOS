const PurchaseOrder = require('../../../models/PurchaseOrder');
const AddExpense = require('../../../models/addExpense');
const Sale = require('../../../models/addSale');
// const Contact = require('../../../models/C');

const getTaxReport = async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrder.find()
      .populate('supplier', 'name'); 

    const expenses = await AddExpense.find();

    const sales = await Sale.find();

    const report = purchaseOrders.map(purchaseOrder => {
      const expense = expenses.find(expense => expense.businessLocation === purchaseOrder.businessLocation);
      const sale = sales.find(sale => sale.businesLocation === purchaseOrder.businessLocation);
      return {
        date: purchaseOrder.orderDate,
        referenceNumber: purchaseOrder._id,
        supplier: purchaseOrder.supplier.name,
        // taxNumber: Contact.taxNumber, 
        totalAmount: purchaseOrder.amount,
        paymentMethod: sale.paymentMethod,
        discount: sale.discountAmount, 
        inputTax: expense.applicableTax, 
        outputTax: sale.orderTax, 
        expenseTax: expense.totalAmount 
      };
    });

    res.json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports={getTaxReport}