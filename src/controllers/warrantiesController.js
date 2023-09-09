// controllers/warrantiesController.js
const Warranty = require('../models/warranty');

// Get all warranties
exports.getAllWarranties = async (req, res) => {
    try {
        const warranties = await Warranty.find();
        res.status(200).json(warranties);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new warranty
exports.createWarranty = async (req, res) => {
    const warrantyData = req.body;

    try {
        const newWarranty = await Warranty.create(warrantyData);
        res.status(201).json({ message: 'Warranty added successfully', warranty: newWarranty });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a warranty
exports.updateWarranty = async (req, res) => {
    const warrantyId = req.params.id;
    const warrantyData = req.body;

    try {
        await Warranty.findByIdAndUpdate(warrantyId, warrantyData);
        res.status(200).json({ message: 'Warranty updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a warranty
exports.deleteWarranty = async (req, res) => {
    const warrantyId = req.params.id;

    try {
        await Warranty.findByIdAndDelete(warrantyId);
        res.status(200).json({ message: 'Warranty deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
