const express = require('express');
const router = express.Router();
const kitchenController = require('../controllers/kitchenController');


// GET /kitchen
router.get('/', kitchenController.getKitchenOrders);

// POST /mark-as-cooked
router.post('/mark-as-cooked', kitchenController.markOrderAsCooked);

module.exports = router;