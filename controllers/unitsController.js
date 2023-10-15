// controllers/unitsController.js
const Unit = require('../models/unit');

// Get all units
exports.getAllUnits = async (req, res) => {
    try {
        const units = await Unit.find();
        res.status(200).json(units);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new unit
exports.createUnit = async (req, res) => {
    const unitData = req.body;

    try {
        const newUnit = await Unit.create(unitData);
        res.status(201).json({ message: 'Unit added successfully', unit: newUnit });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a unit
exports.updateUnit = async (req, res) => {
    const unitId = req.params.id;
    const unitData = req.body;

    try {
        await Unit.findByIdAndUpdate(unitId, unitData);
        res.status(200).json({ message: 'Unit updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a unit
exports.deleteUnit = async (req, res) => {
    const unitId = req.params.id;

    try {
        await Unit.findByIdAndDelete(unitId);
        res.status(200).json({ message: 'Unit deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for GET /units/:id
exports.getUnitsById = async (req, res) => {
    const unitId = req.params.id;

    try {
        const unit = await Unit.findById(unitId);

        if (!unit) {
            return res.status(404).json({ message: 'Unit not found' });
        }

        res.status(200).json(unit);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};