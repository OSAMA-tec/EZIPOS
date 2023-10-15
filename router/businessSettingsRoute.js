const express = require('express');
const router = express.Router();
const businessSettingsController = require('../controllers/businessSettingsController');

// router.put('/:id', businessLocationController.createLocation);
router.put('/', businessSettingsController.updateAdmin); //jwttoken //Business and tax: For both same route


