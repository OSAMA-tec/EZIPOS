const express = require('express');
const router = express.Router();
const { getAllCustomerGroups, createCustomerGroup, updateCustomerGroup, deleteCustomerGroup } = require("../controllers/CustomerGroup");
const {checkPermission} = require('../middleware/checkPermission');

router.get('/contact/customergroup', checkPermission('viewCustomerGroup'), getAllCustomerGroups);

router.post('/contact/customergroup', checkPermission('addCustomerGroup'), createCustomerGroup);
router.put('/contact/customergroup/:id', checkPermission('editCustomerGroup'), updateCustomerGroup);
router.delete('/contact/customergroup/:id', checkPermission('deleteCustomerGroup'), deleteCustomerGroup);

module.exports = router;