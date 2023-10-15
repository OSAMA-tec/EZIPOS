const Admin = require('../models/admin');

// Update an admin by ID
exports.updateAdmin = async (req, res) => {
    // const adminId = req.params.id;
    const adminId = req.user.userId;

    const updateData = req.body;

    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(adminId, updateData, { new: true });

        if (!updatedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.status(200).json({ message: 'Admin updated successfully', admin: updatedAdmin });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
