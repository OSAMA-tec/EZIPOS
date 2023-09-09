// routes/brandsRoutes.js
const express = require('express');
const router = express.Router();
const brandsController = require('../controllers/brandsController');

// GET /brands
router.get('/', brandsController.getAllBrands);

// POST /brands
router.post('/', brandsController.createBrand);

// PUT /brands/:id
router.put('/:id', brandsController.updateBrand);

// DELETE /brands/:id
router.delete('/:id', brandsController.deleteBrand);

module.exports = router;
