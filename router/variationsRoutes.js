// routes/variationsRoutes.js
const express = require('express');
const router = express.Router();
const variationsController = require('../controllers/variationsController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /variations/all-records
router.get('/all-records', authMiddleware,checkPermission('viewProduct'), variationsController.getAllVariations);

// POST /variations
router.post('/',authMiddleware, checkPermission('addProduct'), variationsController.createVariation);

// PUT /variations/:id
router.put('/:id', authMiddleware,checkPermission('editProduct'), variationsController.updateVariation);

// DELETE /variations/:id
router.delete('/:id',authMiddleware, checkPermission('deleteProduct'), variationsController.deleteVariation);

// Get /variationbyid
router.get('/:id', authMiddleware,checkPermission('viewProduct'), variationsController.getVariationById);

module.exports = router;