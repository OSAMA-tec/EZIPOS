const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Login
exports.login = async (req, res) => {
    const { userName, password } = req.body;

    try {
        const user = await Admin.findOne({ userName });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Authentication successful
        const payload = {
            _id: user._id,
            userName: user.userName,
            email: user.email
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

        return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Register
exports.register = async (req, res) => {
    const registrationData = req.body;

    try {
        const newRegistration = await Admin.create(registrationData);
        res.status(201).json({ message: 'Registration successful', user: newRegistration });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};