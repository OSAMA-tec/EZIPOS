
const Sale = require('../models/addSale');


exports.getKitchenOrders = async (req, res) => {
    try {
        const kitchenOrders = await Sale.find({ orderStatus: 'Received' });

        res.status(200).json(kitchenOrders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.markOrderAsCooked = async (req, res) => {
    try {
        const orderId = req.body.orderId;

        await Sale.findByIdAndUpdate(orderId, { orderStatus: 'Cooked' });

        res.status(200).json({ message: 'Order marked as cooked' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


