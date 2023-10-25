// routes/unitsRoutes.js
const express = require('express');
const router = express.Router();
const unitsController = require('../controllers/unitsController');
const {checkPermission} = require('../middleware/checkPermission');

// GET /units
router.get('/', checkPermission('viewUnit'), unitsController.getAllUnits);

// POST /units
router.post('/', checkPermission('addUnit'), unitsController.createUnit);

// PUT /units/:id
router.put('/:id', checkPermission('editUnit'), unitsController.updateUnit);

// DELETE /units/:id
router.delete('/:id', checkPermission('deleteUnit'), unitsController.deleteUnit);

// Get /userbyid
router.get('/:id', checkPermission('viewUnit'), unitsController.getUnitsById);

module.exports = router;