// routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// GET Sales Shipment Status
router.get('/shipments', authMiddleware,checkPermission('accessAllShipments'), salesController.saleShipment);

// GET /sales/all-records
router.get('/:type', authMiddleware,checkPermission('viewAllSell'), salesController.getAllSales);

// POST /sales
router.post('/:type', authMiddleware,checkPermission('addSell'), salesController.createSale);

// GET /sales/:id
router.get('/:type/:id',authMiddleware, checkPermission('viewAllSell'), salesController.getSaleById);

// PUT /sales/:id
router.put('/:type/:id',authMiddleware, checkPermission('updateSell'), salesController.updateSale);

// DELETE /sales/:id
router.delete('/:type/:id',authMiddleware, checkPermission('deleteSell'), salesController.deleteSale);

module.exports = router;