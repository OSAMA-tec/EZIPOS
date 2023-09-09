// routes/unitsRoutes.js
const express = require('express');
const router = express.Router();
const unitsController = require('../controllers/unitsController');

// GET /units
router.get('/', unitsController.getAllUnits);

// POST /units
router.post('/', unitsController.createUnit);

// PUT /units/:id
router.put('/:id', unitsController.updateUnit);

// DELETE /units/:id
router.delete('/:id', unitsController.deleteUnit);

module.exports = router;
