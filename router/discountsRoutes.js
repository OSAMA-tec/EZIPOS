const express = require('express');
const router = express.Router();
const discountsController = require('../controllers/discountsController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// POST /discounts
router.post('/',authMiddleware, checkPermission('addEditDeleteDiscount'), discountsController.createDiscount);

// PUT /discounts/:id
router.put('/:id', authMiddleware,checkPermission('addEditDeleteDiscount'), discountsController.updateDiscount);

// DELETE /discounts/:id
router.delete('/:id',authMiddleware, checkPermission('addEditDeleteDiscount'), discountsController.deleteDiscount);

// GET /discounts/:id
router.get('/:id', authMiddleware,checkPermission('addEditDeleteDiscount'), discountsController.getDiscountById);

// GET /discounts
router.get('/',authMiddleware, checkPermission('addEditDeleteDiscount'), discountsController.getAllDiscounts);

module.exports = router;