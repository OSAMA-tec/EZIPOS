const express = require('express');
const router = express.Router();
const stockAdjustmentController = require('../controllers/stockAdjustmentController');


// Routes for stock adjustments
router.post('/', stockAdjustmentController.createStockAdjustment);

router.put('/:id', stockAdjustmentController.updateStockAdjustment);

router.delete('/:id', stockAdjustmentController.deleteStockAdjustment);

router.get('/:id', stockAdjustmentController.getStockAdjustmentById);

router.get('/', stockAdjustmentController.getAllStockAdjustments);

module.exports = router;
