// controllers/businessLocationController.js

const BusinessLocation = require('../models/businessLocation');

// Create a new business location
exports.createLocation = async (req, res) => {
  try {
    const location = await BusinessLocation.create(req.body);
    res.status(201).json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a list of all business locations
exports.getLocations = async (req, res) => {
  try {
    const locations = await BusinessLocation.find();
    res.status(200).json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get details of a specific location
exports.getLocation = async (req, res) => {
  try {
    const location = await BusinessLocation.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.status(200).json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a location
exports.updateLocation = async (req, res) => {
  try {
    const updatedLocation = await BusinessLocation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedLocation) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.status(200).json(updatedLocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a location
exports.deleteLocation = async (req, res) => {
  try {
    const deletedLocation = await BusinessLocation.findByIdAndDelete(req.params.id);
    if (!deletedLocation) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
