// routes/brandsRoutes.js
const express = require('express');
const router = express.Router();
const brandsController = require('../controllers/brandsController');
const authMiddleware = require('../../middleware/authMiddleware');

// GET /brands
router.get('/',authMiddleware, brandsController.getAllBrands);

// POST /brands
router.post('/',authMiddleware, brandsController.createBrand);

// PUT /brands/:id
router.put('/:id',authMiddleware, brandsController.updateBrand);

// DELETE /brands/:id
router.delete('/:id',authMiddleware, brandsController.deleteBrand);

module.exports = router;
