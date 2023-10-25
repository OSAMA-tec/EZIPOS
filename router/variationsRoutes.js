// routes/variationsRoutes.js
const express = require('express');
const router = express.Router();
const variationsController = require('../controllers/variationsController');
const {checkPermission} = require('../middleware/checkPermission'); 

// GET /variations/all-records
router.get('/all-records', checkPermission('viewProduct'), variationsController.getAllVariations);

// POST /variations
router.post('/', checkPermission('addProduct'), variationsController.createVariation);

// PUT /variations/:id
router.put('/:id', checkPermission('editProduct'), variationsController.updateVariation);

// DELETE /variations/:id
router.delete('/:id', checkPermission('deleteProduct'), variationsController.deleteVariation);

// Get /variationbyid
router.get('/:id', checkPermission('viewProduct'), variationsController.getVariationById);

module.exports = router;