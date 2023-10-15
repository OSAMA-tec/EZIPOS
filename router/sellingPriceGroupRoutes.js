const express = require('express');
const router = express.Router();
const sellingPriceGroupController = require('../controllers/sellingPriceGroupController');

//  add Route
router.post('/', sellingPriceGroupController.addSellingPriceGroup);

// delete Route 
router.delete('/:id', sellingPriceGroupController.deleteSellingPriceGroup);

// edit Route
router.put('/:id', sellingPriceGroupController.editSellingPriceGroup);

// Get /userbyid
router.get('/:id', sellingPriceGroupController.getSellingPriceGroupById);

// GET /all spgs
router.get('/', sellingPriceGroupController.getAllSellingPriceGroup);

module.exports = router;
