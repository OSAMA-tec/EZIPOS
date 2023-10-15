// routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');
//GET Sales Shipment Status
router.get('/shipments', salesController.saleShipment);

// GET /sales/all-records
router.get('/:type', salesController.getAllSales);

// POST /sales
router.post('/:type', salesController.createSale);

// GET /sales/:id
router.get('/:type/:id', salesController.getSaleById);

// PUT /sales/:id
router.put('/:type/:id', salesController.updateSale);

// DELETE /sales/:id
router.delete('/:type/:id', salesController.deleteSale);



module.exports = router;
