const express = require('express');
const router = express.Router();
const kitchenController = require('../controllers/kitchenController');
const checkPermission = require('../middleware/checkPermission'); 

// GET /kitchen
router.get('/', checkPermission('viewHomeData'), kitchenController.getKitchenOrders);

// POST /mark-as-cooked
router.post('/mark-as-cooked', checkPermission('serviceStaff'), kitchenController.markOrderAsCooked);

module.exports = router;