const express = require('express');
const router = express.Router();
const stockAdjustmentController = require('../controllers/stockAdjustmentController');
const authMiddleware = require('../../middleware/authMiddleware');


// Routes for stock adjustments
router.post('/', authMiddleware,stockAdjustmentController.createStockAdjustment);

router.put('/:id',authMiddleware, stockAdjustmentController.updateStockAdjustment);

router.delete('/:id',authMiddleware, stockAdjustmentController.deleteStockAdjustment);

router.get('/:id',authMiddleware, stockAdjustmentController.getStockAdjustmentById);

router.get('/', authMiddleware,stockAdjustmentController.getAllStockAdjustments);

module.exports = router;
