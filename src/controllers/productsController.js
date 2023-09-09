// controllers/productsController.js
const Product = require('../models/addProduct');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new product
exports.createProduct = async (req, res) => {
    const productData = req.body;

    try {
        const newProduct = await Product.create(productData);
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    const productId = req.params.id;
    const productData = req.body;

    try {
        await Product.findByIdAndUpdate(productId, productData);
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        await Product.findByIdAndDelete(productId);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
