// stockTransferController.js

const StockTransfer = require('../models/addStocktransfer');

// Controller for POST /stock-transfers
exports.createStockTransfer = async (req, res) => {
    const transferData = req.body;

    try {
        let totalAmount = 0
        // console.log(saleData.invoiceNumber)
        transferData.inputData.forEach((item) => {
            totalAmount += item.subtotal;
        });

        const newTransfer = new StockTransfer({
            totalAmount: totalAmount,
            ...transferData
        });
        const transferSaved = await newTransfer.save();
        // const newTransfer = await StockTransfer.create(transferData);
        res.status(201).json({ message: 'Stock transfer added successfully', transfer: transferSaved });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for PUT /stock-transfers/:id
exports.updateStockTransfer = async (req, res) => {
    const transferId = req.params.id;
    const transferData = req.body;

    try {
        const updatedTransfer = await StockTransfer.findByIdAndUpdate(transferId, transferData, { new: true });

        if (!updatedTransfer) {
            return res.status(404).json({ message: 'Stock transfer not found' });
        }

        res.status(200).json({ message: 'Stock transfer updated successfully', transfer: updatedTransfer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for DELETE /stock-transfers/:id
exports.deleteStockTransfer = async (req, res) => {
    const transferId = req.params.id;

    try {
        const deletedTransfer = await StockTransfer.findByIdAndDelete(transferId);

        if (!deletedTransfer) {
            return res.status(404).json({ message: 'Stock transfer not found' });
        }

        res.status(200).json({ message: 'Stock transfer deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for GET /stock-transfers/:id
exports.getStockTransferById = async (req, res) => {
    const transferId = req.params.id;

    try {
        const transfer = await StockTransfer.findById(transferId);

        if (!transfer) {
            return res.status(404).json({ message: 'Stock transfer not found' });
        }

        res.status(200).json(transfer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for GET /stock-transfers
exports.getAllStockTransfers = async (req, res) => {
    try {
        const transfers = await StockTransfer.find();
        res.status(200).json(transfers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
