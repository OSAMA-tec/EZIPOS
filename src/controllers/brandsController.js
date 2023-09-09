// controllers/brandsController.js
const Brand = require('../models/brand');

// Get all brands
exports.getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new brand
exports.createBrand = async (req, res) => {
    const brandData = req.body;

    try {
        const newBrand = await Brand.create(brandData);
        res.status(201).json({ message: 'Brand added successfully', brand: newBrand });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a brand
exports.updateBrand = async (req, res) => {
    const brandId = req.params.id;
    const brandData = req.body;

    try {
        await Brand.findByIdAndUpdate(brandId, brandData);
        res.status(200).json({ message: 'Brand updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a brand
exports.deleteBrand = async (req, res) => {
    const brandId = req.params.id;

    try {
        await Brand.findByIdAndDelete(brandId);
        res.status(200).json({ message: 'Brand deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
