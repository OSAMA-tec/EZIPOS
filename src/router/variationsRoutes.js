// routes/variationsRoutes.js
const express = require('express');
const router = express.Router();
const variationsController = require('../controllers/variationsController');
const authMiddleware = require('../../middleware/authMiddleware');

// GET /variations/all-records
router.get('/all-records',authMiddleware, variationsController.getAllVariations);

// POST /variations
router.post('/',authMiddleware, variationsController.createVariation);

// PUT /variations/:id
router.put('/:id',authMiddleware, variationsController.updateVariation);

// DELETE /variations/:id
router.delete('/:id',authMiddleware, variationsController.deleteVariation);

module.exports = router;
