const express = require('express');
const router = express.Router();
const kitchenController = require('../controllers/kitchenController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /kitchen
router.get('/',authMiddleware, checkPermission('viewHomeData'), kitchenController.getKitchenOrders);

// POST /mark-as-cooked
router.post('/mark-as-cooked',authMiddleware, checkPermission('serviceStaff'), kitchenController.markOrderAsCooked);

module.exports = router;