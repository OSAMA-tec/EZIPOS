// routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');
const authMiddleware = require('../../middleware/authMiddleware');

// GET /sales/all-records
router.get('/all-records',authMiddleware, salesController.getAllSales);

// POST /sales
router.post('/',authMiddleware, salesController.createSale);

// GET /sales/:id
router.get('/:id',authMiddleware, salesController.getSaleById);

// PUT /sales/:id
router.put('/:id',authMiddleware, salesController.updateSale);

// DELETE /sales/:id
router.delete('/:id', authMiddleware,salesController.deleteSale);

//GET Sales Shipment Status
router.get('/shipments/:status',authMiddleware, salesController.saleShipment);

module.exports = router;
