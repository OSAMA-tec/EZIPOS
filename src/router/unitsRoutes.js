// routes/unitsRoutes.js
const express = require('express');
const router = express.Router();
const unitsController = require('../controllers/unitsController');
const authMiddleware = require('../../middleware/authMiddleware');

// GET /units
router.get('/',authMiddleware, unitsController.getAllUnits);

// POST /units
router.post('/',authMiddleware, unitsController.createUnit);

// PUT /units/:id
router.put('/:id',authMiddleware, unitsController.updateUnit);

// DELETE /units/:id
router.delete('/:id', authMiddleware,unitsController.deleteUnit);

module.exports = router;
