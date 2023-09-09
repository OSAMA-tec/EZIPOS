// routes/variationsRoutes.js
const express = require('express');
const router = express.Router();
const variationsController = require('../controllers/variationsController');

// GET /variations/all-records
router.get('/all-records', variationsController.getAllVariations);

// POST /variations
router.post('/', variationsController.createVariation);

// PUT /variations/:id
router.put('/:id', variationsController.updateVariation);

// DELETE /variations/:id
router.delete('/:id', variationsController.deleteVariation);

module.exports = router;
