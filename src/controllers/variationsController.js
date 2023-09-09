// controllers/variationsController.js
const Variation = require('../models/variation');

// Get all variations
exports.getAllVariations = async (req, res) => {
    try {
        const variations = await Variation.find();
        res.status(200).json(variations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new variation
exports.createVariation = async (req, res) => {
    const variationData = req.body;

    try {
        const newVariation = await Variation.create(variationData);
        res.status(201).json({ message: 'Variation added successfully', variation: newVariation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a variation
exports.updateVariation = async (req, res) => {
    const variationId = req.params.id;
    const variationData = req.body;

    try {
        await Variation.findByIdAndUpdate(variationId, variationData);
        res.status(200).json({ message: 'Variation updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a variation
exports.deleteVariation = async (req, res) => {
    const variationId = req.params.id;

    try {
        await Variation.findByIdAndDelete(variationId);
        res.status(200).json({ message: 'Variation deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
