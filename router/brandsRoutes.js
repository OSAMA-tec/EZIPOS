const express = require('express');
const router = express.Router();
const brandsController = require('../controllers/brandsController');
const {checkPermission}=require('../middleware/checkPermission');

// GET /brands
router.get('/', checkPermission('viewBrand'), brandsController.getAllBrands);

// POST /brands
router.post('/', checkPermission('addBrand'), brandsController.createBrand);

// PUT /brands/:id
router.put('/:id', checkPermission('editBrand'), brandsController.updateBrand);

// DELETE /brands/:id
router.delete('/:id', checkPermission('deleteBrand'), brandsController.deleteBrand);

// Get /brandsbyid
router.get('/:id', checkPermission('viewBrand'), brandsController.getBrandsById);

module.exports = router;