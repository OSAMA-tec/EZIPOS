const express = require('express');
const router = express.Router();
const businessSettingsController = require('../controllers/businessSettingsController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// PUT /businessSettings
router.put('/',authMiddleware, checkPermission('accessBusinessSettings'), businessSettingsController.updateAdmin);

module.exports = router;