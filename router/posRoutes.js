const express = require('express');
const router = express.Router();
const posController = require('../controllers/posController');
const {checkPermission} = require('../middleware/checkPermission');

// GET Sales Shipment Status
router.get('/shipments', checkPermission('viewAllSell'), posController.salePosShipment);

// GET /sales/all-records
router.get('/:type', checkPermission('viewAllSell'), posController.getAllPosSales);

// POST /sales
router.post('/:type', checkPermission('addSell'), posController.createPosSale);

// GET /sales/:id
router.get('/:type/:id', checkPermission('viewAllSell'), posController.getPosSaleById);

// PUT /sales/:id
router.put('/:type/:id', checkPermission('updateSell'), posController.updatePosSale);

// DELETE /sales/:id
router.delete('/:type/:id', checkPermission('deleteSell'), posController.deletePosSale);

module.exports = router;