const express = require('express');
const router = express.Router();
const posController = require('../controllers/posController');
//GET Sales Shipment Status
router.get('/shipments', posController.salePosShipment);

// GET /sales/all-records
router.get('/:type', posController.getAllPosSales);

// POST /sales
router.post('/:type', posController.createPosSale);

// GET /sales/:id
router.get('/:type/:id', posController.getPosSaleById);

// PUT /sales/:id
router.put('/:type/:id', posController.updatePosSale);

// DELETE /sales/:id
router.delete('/:type/:id', posController.deletePosSale);



module.exports = router;
