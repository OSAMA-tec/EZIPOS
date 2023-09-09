// controllers/salesController.js
const Sale = require('../models/addSale');

// Get all sales
exports.getAllSales = async (req, res) => {
    try {
        const sales = await Sale.find();
        res.status(200).json(sales);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new sale
exports.createSale = async (req, res) => {
    const saleData = req.body;

    try {
        const newSale = await Sale.create(saleData);
        res.status(201).json({ message: 'Sale added successfully', sale: newSale });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a sale by ID
exports.getSaleById = async (req, res) => {
    const saleId = req.params.id;

    try {
        const sale = await Sale.findById(saleId);

        if (!sale) {
            return res.status(404).json({ message: 'Sale not found' });
        }

        res.status(200).json(sale);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a sale
exports.updateSale = async (req, res) => {
    const saleId = req.params.id;
    const saleData = req.body;

    try {
        const updatedSale = await Sale.findByIdAndUpdate(saleId, saleData, { new: true });

        if (!updatedSale) {
            return res.status(404).json({ message: 'Sale not found' });
        }

        res.status(200).json({ message: 'Sale updated successfully', sale: updatedSale });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a sale
exports.deleteSale = async (req, res) => {
    const saleId = req.params.id;

    try {
        const deletedSale = await Sale.findByIdAndDelete(saleId);

        if (!deletedSale) {
            return res.status(404).json({ message: 'Sale not found' });
        }

        res.status(200).json({ message: 'Sale deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// GET /shipments/:status
exports.saleShipment = async (req, res) => {
    const shipmentStatus = req.params.status;
    // if (!shipmentStatus || shipmentStatus.trim() === '') {
    //     return res.status(400).json({ message: 'Please provide a valid shipment status' });
    //   }

    try {
        const shipments = await Sale.find({ shipmentStatus: shipmentStatus });
        res.status(200).json(shipments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};