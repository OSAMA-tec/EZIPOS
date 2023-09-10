
const Draft = require('../../../models/addDraft');
const AddExpense = require('../../../models/addExpense');
const Sale = require('../../../models/addSale');

function getDateRangeFilter(range) {
    const now = new Date();
    const start = new Date();
    const end = new Date();
  
    switch (range) {
      case 'Today':
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        break;
      case 'Yesterday':
        start.setDate(start.getDate() - 1);
        start.setHours(0, 0, 0, 0);
        end.setDate(end.getDate() - 1);
        end.setHours(23, 59, 59, 999);
        break;
      case 'Last 7 Days':
        start.setDate(start.getDate() - 7);
        break;
      case 'Last 30 Days':
        start.setDate(start.getDate() - 30);
        break;
      case 'This Month':
        start.setDate(1);
        start.setHours(0, 0, 0, 0);
        end.setMonth(end.getMonth() + 1);
        end.setDate(0);
        end.setHours(23, 59, 59, 999);
        break;
      case 'Last Month':
        start.setMonth(start.getMonth() - 1);
        start.setDate(1);
        start.setHours(0, 0, 0, 0);
        end.setDate(0);
        end.setHours(23, 59, 59, 999);
        break;
      default:
        return null;
    }
  
    return { $gte: start, $lte: end };
}
const purchaseSale=async (req, res) => {
    try {
      const range = req.params.range;
      const dateFilter = getDateRangeFilter(range);
  
      if (!dateFilter) {
        return res.status(400).json({ message: 'Invalid date range' });
      }
  
      const totalPurchase = await Sale.aggregate([
        { $match: { status: 'purchase', saleDate: dateFilter } },
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ]);
  
      const totalSale = await Sale.aggregate([
        { $match: { status: 'sale', saleDate: dateFilter } },
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ]);
  
      const totalPurchaseReturn = await Sale.aggregate([
        { $match: { status: 'purchase_return', saleDate: dateFilter } },
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ]);
  
      const totalSellReturn = await Sale.aggregate([
        { $match: { status: 'sell_return', saleDate: dateFilter } },
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ]);
  
      const purchaseDue = await AddExpense.aggregate([
        { $match: { date: dateFilter } },
        { $group: { _id: null, total: { $sum: '$totalAmount' } } },
      ]);
  
      const saleDue = await Draft.aggregate([
        { $match: { saleDate: dateFilter } },
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ]);
  
      const report = {
        purchases: {
          totalPurchase: totalPurchase[0]?.total || 0,
          purchaseIncludingTax: totalPurchase[0]?.total || 0,
          totalPurchaseReturnIncludingTax: totalPurchaseReturn[0]?.total || 0,
          purchaseDue: purchaseDue[0]?.total || 0,
        },
        sales: {
          totalSale: totalSale[0]?.total || 0,
          saleIncludingTax: totalSale[0]?.total || 0, 
          totalSellReturnIncludingTax: totalSellReturn[0]?.total || 0,
          saleDue: saleDue[0]?.total || 0,
        },
        overall: {
          salePurchase: (totalSale[0]?.total || 0) - (totalPurchase[0]?.total || 0),
          dueAmount: (saleDue[0]?.total || 0) - (purchaseDue[0]?.total || 0),
        },
      };
  
      res.status(200).json(report);
    } catch (error) {
      res.status(500).json({ message: 'Error generating report', error });
    }
  };

  module.exports={purchaseSale}