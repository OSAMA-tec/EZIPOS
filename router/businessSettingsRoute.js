const express = require('express');
const router = express.Router();
const businessSettingsController = require('../controllers/businessSettingsController');
const {checkPermission} = require('../middleware/checkPermission'); 

// PUT /businessSettings
router.put('/', checkPermission('accessBusinessSettings'), businessSettingsController.updateAdmin);

module.exports = router;