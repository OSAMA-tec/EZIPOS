
const Register = require('../../../models/register');


const registerReport= async (req, res) => {
  try {
    const registers = await Register.find()
      .populate('user', 'firstName lastName email') 
      .populate('location', 'name city state country'); 

    const report = registers.map(register => ({
      openTime: register.openTime,
      closeTime: register.closeTime,
      location: register.location.name,
      user: `${register.user.firstName} ${register.user.lastName}`,
      userEmail: register.user.email,
      totalCardSlips: register.totalCardSlips,
      totalCheques: register.totalCheques,
      totalCash: register.totalCash,
      totalBankTransfer: register.totalBankTransfer,
      totalAdvancePayment: register.totalAdvancePayment,
      easyPaisa: register.easyPaisa,
      customPayment2: register.customPayment2,
      customPayment3: register.customPayment3,
      otherPayments: register.otherPayments,
      total: register.total,
      action: register.action
    }));

    res.json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {registerReport};