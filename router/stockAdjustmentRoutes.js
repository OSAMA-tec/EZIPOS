// routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const stockAdjustmentController = require('../controllers/stockAdjustmentController');
const {checkPermission} = require('../middleware/checkPermission'); 

// Routes for stock adjustments
router.post('/', checkPermission('addStockAdjustment'), stockAdjustmentController.createStockAdjustment);

router.put('/:id', checkPermission('editStockAdjustment'), stockAdjustmentController.updateStockAdjustment);

router.delete('/:id', checkPermission('deleteStockAdjustment'), stockAdjustmentController.deleteStockAdjustment);

router.get('/:id', checkPermission('viewStockAdjustment'), stockAdjustmentController.getStockAdjustmentById);

router.get('/', checkPermission('viewAllStockAdjustments'), stockAdjustmentController.getAllStockAdjustments);

module.exports = router;