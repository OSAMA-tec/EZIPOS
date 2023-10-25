const express = require('express');
const router = express.Router();
const businessLocationController = require('../controllers/businessLocationController');
const {checkPermission}=require('../middleware/checkPermission');

// Create a new business location
router.post('/', checkPermission('addLocation'), businessLocationController.createLocation);

// Get a list of all business locations
router.get('/', checkPermission('viewLocation'), businessLocationController.getLocations);

// Get details of a specific location
router.get('/:id', checkPermission('viewLocation'), businessLocationController.getLocation);

// Update a location
router.put('/:id', checkPermission('editLocation'), businessLocationController.updateLocation);

// Delete a location
router.delete('/:id', checkPermission('deleteLocation'), businessLocationController.deleteLocation);

module.exports = router;