// routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const stockAdjustmentController = require('../controllers/stockAdjustmentController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// Routes for stock adjustments
router.post('/', authMiddleware,checkPermission('addStockAdjustment'), stockAdjustmentController.createStockAdjustment);

router.put('/:id', authMiddleware,checkPermission('editStockAdjustment'), stockAdjustmentController.updateStockAdjustment);

router.delete('/:id',authMiddleware, checkPermission('deleteStockAdjustment'), stockAdjustmentController.deleteStockAdjustment);

router.get('/:id', authMiddleware,checkPermission('viewStockAdjustment'), stockAdjustmentController.getStockAdjustmentById);

router.get('/',authMiddleware, checkPermission('viewAllStockAdjustments'), stockAdjustmentController.getAllStockAdjustments);

module.exports = router;