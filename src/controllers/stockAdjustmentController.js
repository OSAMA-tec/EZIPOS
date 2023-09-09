// stockAdjustmentController.js

const StockAdjustment = require('../models/addStockadjustment');

// Controller for POST /stock-adjustment
exports.createStockAdjustment = async (req, res) => {
    const adjustmentData = req.body;

    try {
        const newAdjustment = await StockAdjustment.create(adjustmentData);
        res.status(201).json({ message: 'Stock adjustment added successfully', adjustment: newAdjustment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for PUT /stock-adjustment/:id
exports.updateStockAdjustment = async (req, res) => {
    const adjustmentId = req.params.id;
    const adjustmentData = req.body;

    try {
        const updatedAdjustment = await StockAdjustment.findByIdAndUpdate(adjustmentId, adjustmentData, { new: true });

        if (!updatedAdjustment) {
            return res.status(404).json({ message: 'Stock adjustment not found' });
        }

        res.status(200).json({ message: 'Stock adjustment updated successfully', adjustment: updatedAdjustment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for DELETE /stock-adjustment/:id
exports.deleteStockAdjustment = async (req, res) => {
    const adjustmentId = req.params.id;

    try {
        const deletedAdjustment = await StockAdjustment.findByIdAndDelete(adjustmentId);

        if (!deletedAdjustment) {
            return res.status(404).json({ message: 'Stock adjustment not found' });
        }

        res.status(200).json({ message: 'Stock adjustment deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for GET /stock-adjustment/:id
exports.getStockAdjustmentById = async (req, res) => {
    const adjustmentId = req.params.id;

    try {
        const adjustment = await StockAdjustment.findById(adjustmentId);

        if (!adjustment) {
            return res.status(404).json({ message: 'Stock adjustment not found' });
        }

        res.status(200).json(adjustment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for GET /stock-adjustment
exports.getAllStockAdjustments = async (req, res) => {
    try {
        const adjustments = await StockAdjustment.find();
        res.status(200).json(adjustments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
