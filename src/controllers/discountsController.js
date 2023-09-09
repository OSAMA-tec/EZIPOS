// controllers/discountsController.js
const Discount = require('../models/addDiscount');

// Create a new discount
exports.createDiscount = async (req, res) => {
    const discountData = req.body;

    try {
        const newDiscount = await Discount.create(discountData);
        res.status(201).json({ message: 'Discount added successfully', discount: newDiscount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a discount
exports.updateDiscount = async (req, res) => {
    const discountId = req.params.id;
    const discountData = req.body;

    try {
        const updatedDiscount = await Discount.findByIdAndUpdate(discountId, discountData, { new: true });

        if (!updatedDiscount) {
            return res.status(404).json({ message: 'Discount not found' });
        }

        res.status(200).json({ message: 'Discount updated successfully', discount: updatedDiscount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a discount
exports.deleteDiscount = async (req, res) => {
    const discountId = req.params.id;

    try {
        const deletedDiscount = await Discount.findByIdAndDelete(discountId);

        if (!deletedDiscount) {
            return res.status(404).json({ message: 'Discount not found' });
        }

        res.status(200).json({ message: 'Discount deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a discount by ID
exports.getDiscountById = async (req, res) => {
    const discountId = req.params.id;

    try {
        const discount = await Discount.findById(discountId);

        if (!discount) {
            return res.status(404).json({ message: 'Discount not found' });
        }

        res.status(200).json(discount);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all discounts
exports.getAllDiscounts = async (req, res) => {
    try {
        const discounts = await Discount.find();
        res.status(200).json(discounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
