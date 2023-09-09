// routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

// GET /sales/all-records
router.get('/all-records', salesController.getAllSales);

// POST /sales
router.post('/', salesController.createSale);

// GET /sales/:id
router.get('/:id', salesController.getSaleById);

// PUT /sales/:id
router.put('/:id', salesController.updateSale);

// DELETE /sales/:id
router.delete('/:id', salesController.deleteSale);

//GET Sales Shipment Status
router.get('/shipments/:status', salesController.saleShipment);

module.exports = router;
