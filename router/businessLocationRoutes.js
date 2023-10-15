
const express = require('express');
const router = express.Router();
const businessLocationController = require('../controllers/businessLocationController');

// Create a new business location
router.post('/', businessLocationController.createLocation);

// Get a list of all business locations
router.get('/', businessLocationController.getLocations);

// Get details of a specific location
router.get('/:id', businessLocationController.getLocation);

// Update a location
router.put('/:id', businessLocationController.updateLocation);

// Delete a location
router.delete('/:id', businessLocationController.deleteLocation);

module.exports = router;
