const SellPayment = require('../../../models/sellPayment');

const getSellPaymentReport = async (req, res) => {
  try {
    const sellPayments = await SellPayment.find()
      .populate('customer', 'name')
      .populate('customerGroup', 'groupName')
      .populate('sell', 'invoiceNumber')
      .select('referenceNo paidOn amount paymentMethod');

    if (!sellPayments) {
      return res.status(404).json({
        success: false,
        message: 'No sell payments found',
      });
    }

    res.status(200).json({
      success: true,
      data: sellPayments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};




module.exports={getSellPaymentReport}