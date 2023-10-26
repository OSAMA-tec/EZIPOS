const express = require('express');
const router = express.Router();
const discountsController = require('../controllers/discountsController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// POST /discounts
router.post('/', checkPermission('addEditDeleteDiscount'), discountsController.createDiscount);

// PUT /discounts/:id
router.put('/:id', checkPermission('addEditDeleteDiscount'), discountsController.updateDiscount);

// DELETE /discounts/:id
router.delete('/:id', checkPermission('addEditDeleteDiscount'), discountsController.deleteDiscount);

// GET /discounts/:id
router.get('/:id', checkPermission('addEditDeleteDiscount'), discountsController.getDiscountById);

// GET /discounts
router.get('/', checkPermission('addEditDeleteDiscount'), discountsController.getAllDiscounts);

module.exports = router;