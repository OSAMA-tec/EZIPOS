// controllers/usersController.js
const User = require('../models/addUser');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate('role', 'name'); 
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const userData = req.body;

    try {
        const newUser = await User.create(userData);
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a user
exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;

    try {
        await User.findByIdAndUpdate(userId, userData);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for GET /stock-transfers/:id
exports.getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};