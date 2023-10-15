const express = require('express')
const router = express.Router();

const {getAllCustomerGroups,createCustomerGroup,updateCustomerGroup, deleteCustomerGroup}=require("../controllers/CustomerGroup")

router.get('/contact/customergroup',getAllCustomerGroups);

router.post('/contact/customergroup', createCustomerGroup);
router.put('/contact/customergroup/:id', updateCustomerGroup);
router.delete('/contact/customergroup/:id', deleteCustomerGroup);




module.exports = router;
