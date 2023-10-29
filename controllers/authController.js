// controllers/authController.js
const Admin = require('../models/admin');
const User = require('../models/addUser');
const Role = require('../models/roles');


exports.login = async (req, res) => {
    const { userName, password } = req.body;

    try {
        const user = await Admin.findOne({ userName }).lean();
        const userInUserSchema = await User.findOne({ userName }).lean();
        let Id;
        if (!user && !userInUserSchema) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        let roleModel;
        let role;
        if (user && user.password === password) {
            role = 'Admin';
            Id = user._id
        } else if (userInUserSchema && userInUserSchema.password === password) {
            role = 'User';
            if (userInUserSchema.role) {
                roleModel = await Role.findById(userInUserSchema.role);
                if (!roleModel) {
                    return res.status(401).json({ message: 'Invalid role' });
                }
            } else {
                return res.status(401).json({ message: 'No role assigned to user' });
            }
            Id = userInUserSchema._id

        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        if (userInUserSchema && userInUserSchema.role) {
            roleModel = await Role.findById(userInUserSchema.role);
        }

        const token = jwt.sign(
            { Id, userName, role, ...(roleModel && { roleModel }) },
            process.env.JWT_SECRET,
            { expiresIn: '60d' }
        );

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



