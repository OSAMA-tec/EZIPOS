// routes/unitsRoutes.js
const express = require('express');
const router = express.Router();
const unitsController = require('../controllers/unitsController');
const {checkPermission} = require('../middleware/checkPermission');
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /units
router.get('/',authMiddleware, checkPermission('viewUnit'), unitsController.getAllUnits);

// POST /units
router.post('/', authMiddleware,checkPermission('addUnit'), unitsController.createUnit);

// PUT /units/:id
router.put('/:id',authMiddleware, checkPermission('editUnit'), unitsController.updateUnit);

// DELETE /units/:id
router.delete('/:id',authMiddleware, checkPermission('deleteUnit'), unitsController.deleteUnit);

// Get /userbyid
router.get('/:id',authMiddleware, checkPermission('viewUnit'), unitsController.getUnitsById);

module.exports = router;