const express = require('express');
const router = express.Router();
const posController = require('../controllers/posController');
const {checkPermission} = require('../middleware/checkPermission');
const authMiddleware = require('../middleware/authMiddleware'); 

// GET Sales Shipment Status
router.get('/shipments',authMiddleware, checkPermission('viewAllSell'), posController.salePosShipment);

// GET /sales/all-records
router.get('/:type',authMiddleware, checkPermission('viewAllSell'), posController.getAllPosSales);

// POST /sales
router.post('/:type',authMiddleware, checkPermission('addSell'), posController.createPosSale);

// GET /sales/:id
router.get('/:type/:id',authMiddleware, checkPermission('viewAllSell'), posController.getPosSaleById);

// PUT /sales/:id
router.put('/:type/:id',authMiddleware, checkPermission('updateSell'), posController.updatePosSale);

// DELETE /sales/:id
router.delete('/:type/:id',authMiddleware, checkPermission('deleteSell'), posController.deletePosSale);

module.exports = router;