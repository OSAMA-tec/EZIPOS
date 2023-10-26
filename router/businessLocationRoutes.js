const express = require('express');
const router = express.Router();
const businessLocationController = require('../controllers/businessLocationController');
const {checkPermission}=require('../middleware/checkPermission');
const authMiddleware=require('../middleware/authMiddleware');

// Create a new business location
router.post('/', authMiddleware,checkPermission('addLocation'), businessLocationController.createLocation);

// Get a list of all business locations
router.get('/',authMiddleware, checkPermission('viewLocation'), businessLocationController.getLocations);

// Get details of a specific location
router.get('/:id',authMiddleware, checkPermission('viewLocation'), businessLocationController.getLocation);

// Update a location
router.put('/:id',authMiddleware, checkPermission('editLocation'), businessLocationController.updateLocation);

// Delete a location
router.delete('/:id',authMiddleware, checkPermission('deleteLocation'), businessLocationController.deleteLocation);

module.exports = router;