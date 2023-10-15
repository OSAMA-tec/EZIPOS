const PurchasePayment = require('../../../models/PurchasePayment');
const Supplier = require('../../../models/Supplier');

const generateReport = async (req, res) => {
    try {
        const payments = await PurchasePayment.find().populate('supplier').exec();

        const report = payments.map(payment => {
            return {
                referenceNo: payment.referenceNo,
                paidOn: payment.paidOn,
                amount: payment.amount,
                supplier: payment.supplier ? payment.supplier.businessName : '',
                paymentMethod: payment.paymentMethod,
                purchase: payment.purchase
            };
        });

        res.status(200).json({
            status: 'success',
            data: report
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message
        });
    }
};


module.exports={generateReport}