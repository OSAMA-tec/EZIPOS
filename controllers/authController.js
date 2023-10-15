// controllers/authController.js
const Admin = require('../models/admin');
const User = require('../models/addUser'); 

// Login
// exports.login = async (req, res) => {
//     const { userName, password } = req.body;

//     try {
//         const user = await Admin.findOne({ userName });

//         if (!user || user.password !== password) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         // Authentication successful
//         return res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };



exports.login = async (req, res) => {
    const { userName, password } = req.body;

    try {
        // console.log(req.body)
        // Check if the user exists in either Admin or User schemas
        const user = await Admin.findOne({ userName }).lean();
        const userInUserSchema = await User.findOne({ userName }).lean();

        if (!user && !userInUserSchema) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check if the provided password matches in either Admin or User schemas
        if (user && user.password === password) {
            // Authentication successful for Admin
            return res.status(200).json({ message: 'Login successful for Admin' });
        } else if (userInUserSchema && userInUserSchema.password === password) {
            // Authentication successful for User
            return res.status(200).json({ message: 'Login successful for User' });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
// Register
exports.register = async (req, res) => {
    const registrationData = req.body;
    // console.log(registrationData)
    try {
        const newRegistration = await Admin.create(registrationData);
        res.status(201).json({ message: 'Registration successful', user: newRegistration });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



