const express = require('express');
const router = express.Router();
const brandsController = require('../controllers/brandsController');
const {checkPermission}=require('../middleware/checkPermission');
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /brands
router.get('/',authMiddleware, checkPermission('viewBrand'), brandsController.getAllBrands);

// POST /brands
router.post('/',authMiddleware, checkPermission('addBrand'), brandsController.createBrand);

// PUT /brands/:id
router.put('/:id',authMiddleware, checkPermission('editBrand'), brandsController.updateBrand);

// DELETE /brands/:id
router.delete('/:id',authMiddleware, checkPermission('deleteBrand'), brandsController.deleteBrand);

// Get /brandsbyid
router.get('/:id',authMiddleware, checkPermission('viewBrand'), brandsController.getBrandsById);

module.exports = router;