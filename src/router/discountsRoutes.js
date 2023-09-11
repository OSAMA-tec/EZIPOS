// routes/discountsRoutes.js
const express = require('express');
const router = express.Router();
const discountsController = require('../controllers/discountsController');
const authMiddleware = require('../../middleware/authMiddleware');

// POST /discounts
router.post('/',authMiddleware, discountsController.createDiscount);

// PUT /discounts/:id
router.put('/:id',authMiddleware, discountsController.updateDiscount);

// DELETE /discounts/:id
router.delete('/:id',authMiddleware, discountsController.deleteDiscount);

// GET /discounts/:id
router.get('/:id',authMiddleware, discountsController.getDiscountById);

// GET /discounts
router.get('/',authMiddleware, discountsController.getAllDiscounts);

module.exports = router;
