// controllers/quotationsController.js
const Quotation = require('../models/addQuotations');

// Get all quotations
exports.getAllQuotations = async (req, res) => {
    try {
        const quotations = await Quotation.find();
        res.status(200).json(quotations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new quotation
exports.createQuotation = async (req, res) => {
    const quotationData = req.body;

    try {
        const newQuotation = await Quotation.create(quotationData);
        res.status(201).json({ message: 'Quotation added successfully', quotation: newQuotation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a quotation by ID
exports.getQuotationById = async (req, res) => {
    const quotationId = req.params.id;

    try {
        const quotation = await Quotation.findById(quotationId);

        if (!quotation) {
            return res.status(404).json({ message: 'Quotation not found' });
        }

        res.status(200).json(quotation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a quotation
exports.updateQuotation = async (req, res) => {
    const quotationId = req.params.id;
    const quotationData = req.body;

    try {
        const updatedQuotation = await Quotation.findByIdAndUpdate(quotationId, quotationData, { new: true });

        if (!updatedQuotation) {
            return res.status(404).json({ message: 'Quotation not found' });
        }

        res.status(200).json({ message: 'Quotation updated successfully', quotation: updatedQuotation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a quotation
exports.deleteQuotation = async (req, res) => {
    const quotationId = req.params.id;

    try {
        const deletedQuotation = await Quotation.findByIdAndDelete(quotationId);

        if (!deletedQuotation) {
            return res.status(404).json({ message: 'Quotation not found' });
        }

        res.status(200).json({ message: 'Quotation deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
