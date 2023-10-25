// routes/stockTransfersRoutes.js
const express = require('express');
const router = express.Router();
const stockTransferController = require('../controllers/stockTransfersController');
const {checkPermission} = require('../middleware/checkPermission'); 

// Routes for stock transfers
router.post('/', checkPermission('addStockTransfer'), stockTransferController.createStockTransfer);

router.put('/:id', checkPermission('editStockTransfer'), stockTransferController.updateStockTransfer);

router.delete('/:id', checkPermission('deleteStockTransfer'), stockTransferController.deleteStockTransfer);

router.get('/:id', checkPermission('viewStockTransfer'), stockTransferController.getStockTransferById);

router.get('/', checkPermission('viewAllStockTransfers'), stockTransferController.getAllStockTransfers);

module.exports = router;