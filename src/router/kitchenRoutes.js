const express = require('express');
const router = express.Router();
const kitchenController = require('../controllers/kitchenController');

const authMiddleware = require('../../middleware/authMiddleware');

// GET /kitchen
router.get('/',authMiddleware, kitchenController.getKitchenOrders);

// POST /mark-as-cooked
router.post('/mark-as-cooked',authMiddleware, kitchenController.markOrderAsCooked);

module.exports = router;