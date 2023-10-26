// routes/stockTransfersRoutes.js
const express = require('express');
const router = express.Router();
const stockTransferController = require('../controllers/stockTransfersController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// Routes for stock transfers
router.post('/', authMiddleware,checkPermission('addStockTransfer'), stockTransferController.createStockTransfer);

router.put('/:id',authMiddleware, checkPermission('editStockTransfer'), stockTransferController.updateStockTransfer);

router.delete('/:id',authMiddleware, checkPermission('deleteStockTransfer'), stockTransferController.deleteStockTransfer);

router.get('/:id',authMiddleware, checkPermission('viewStockTransfer'), stockTransferController.getStockTransferById);

router.get('/', authMiddleware,checkPermission('viewAllStockTransfers'), stockTransferController.getAllStockTransfers);

module.exports = router;