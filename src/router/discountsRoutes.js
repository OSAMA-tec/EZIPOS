// routes/discountsRoutes.js
const express = require('express');
const router = express.Router();
const discountsController = require('../controllers/discountsController');

// POST /discounts
router.post('/', discountsController.createDiscount);

// PUT /discounts/:id
router.put('/:id', discountsController.updateDiscount);

// DELETE /discounts/:id
router.delete('/:id', discountsController.deleteDiscount);

// GET /discounts/:id
router.get('/:id', discountsController.getDiscountById);

// GET /discounts
router.get('/', discountsController.getAllDiscounts);

module.exports = router;
