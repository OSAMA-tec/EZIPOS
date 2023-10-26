const express = require('express');
const router = express.Router();
const { getAllCustomerGroups, createCustomerGroup, updateCustomerGroup, deleteCustomerGroup } = require("../controllers/CustomerGroup");
const {checkPermission} = require('../middleware/checkPermission');
const authMiddleware = require('../middleware/authMiddleware'); 

router.get('/contact/customergroup',authMiddleware, checkPermission('viewCustomerGroup'), getAllCustomerGroups);

router.post('/contact/customergroup', authMiddleware,checkPermission('addCustomerGroup'), createCustomerGroup);
router.put('/contact/customergroup/:id', authMiddleware,checkPermission('editCustomerGroup'), updateCustomerGroup);
router.delete('/contact/customergroup/:id',authMiddleware, checkPermission('deleteCustomerGroup'), deleteCustomerGroup);

module.exports = router;