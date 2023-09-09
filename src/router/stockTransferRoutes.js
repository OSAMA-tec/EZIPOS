const express = require('express');
const router = express.Router();
const stockTransferController = require('../controllers/stockTransfersController');


// Routes for stock transfers
router.post('/', stockTransferController.createStockTransfer);

router.put('/:id', stockTransferController.updateStockTransfer);

router.delete('/:id', stockTransferController.deleteStockTransfer);

router.get('/:id', stockTransferController.getStockTransferById);

router.get('/', stockTransferController.getAllStockTransfers);

module.exports = router;
