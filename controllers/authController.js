// controllers/authController.js
const Admin = require('../models/admin');
const User = require('../models/addUser'); 
const Role = require('../models/roles');


exports.login = async (req, res) => {
    const { userName, password } = req.body;

    try {
        const user = await Admin.findOne({ userName }).lean();
        const userInUserSchema = await User.findOne({ userName }).lean();

        if (!user && !userInUserSchema) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        let roleModel;
        let role;
        if (user && user.password === password) {
            role = 'Admin';
            roleModel = await Role.findOne({ userId: user._id });
            if (!roleModel) {
                roleModel = new Role({ userId: user._id });
                await roleModel.save();
            }
        } else if (userInUserSchema && userInUserSchema.password === password) {
            role = 'User';
            roleModel = await Role.findOne({ userId: userInUserSchema._id });
            if (!roleModel) {
                roleModel = new Role({ userId: userInUserSchema._id });
                await roleModel.save();
            }
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create a JWT
        const token = jwt.sign(
            { userName, role, roleModel },
            process.env.JWT_SECRET,
            { expiresIn: '60d' } 
        );

        // Send the token in the response
        return res.status(200).json({ message: `Login successful for ${role}`, token });

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



