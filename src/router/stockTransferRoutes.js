const express = require('express');
const router = express.Router();
const stockTransferController = require('../controllers/stockTransfersController');
const authMiddleware = require('../../middleware/authMiddleware');


// Routes for stock transfers
router.post('/',authMiddleware, stockTransferController.createStockTransfer);

router.put('/:id', authMiddleware,stockTransferController.updateStockTransfer);

router.delete('/:id', authMiddleware,stockTransferController.deleteStockTransfer);

router.get('/:id', authMiddleware,stockTransferController.getStockTransferById);

router.get('/', authMiddleware, stockTransferController.getAllStockTransfers);

module.exports = router;
