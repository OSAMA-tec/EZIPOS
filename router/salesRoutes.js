// routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

//GET Sales Shipment Status
router.get('/shipments', checkPermission('accessAllShipments'), salesController.saleShipment);

// GET /sales/all-records
router.get('/:type', checkPermission('viewAllSell'), salesController.getAllSales);

// POST /sales
router.post('/:type', checkPermission('addSell'), salesController.createSale);

// GET /sales/:id
router.get('/:type/:id', checkPermission('viewAllSell'), salesController.getSaleById);

// PUT /sales/:id
router.put('/:type/:id', checkPermission('updateSell'), salesController.updateSale);

// DELETE /sales/:id
router.delete('/:type/:id', checkPermission('deleteSell'), salesController.deleteSale);

module.exports = router;