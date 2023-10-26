const express = require('express');
const router = express.Router();
const { getAllContacts, createSupplierContact, updateSupplierContact,
    deleteSupplierContact,
    getSupplierContactById,
    deleteAllSupplierContacts,
    createCustomerContact,
    updateCustomerContact,
    deleteCustomerContact,
    getCustomerContactById,
    deleteAllCustomerContacts,
    exportContacts
} = require("../controllers/Contact");
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

router.get('/contacts/:type', checkPermission('viewAllCustomer'), getAllContacts);

router.get('/contacts/:type/export', checkPermission('viewExport'), exportContacts);

// supplier routes
router.post('/contacts/:type', checkPermission('addSupplier'), createSupplierContact);
router.put('/contacts/supplier/:id', checkPermission('editSupplier'), updateSupplierContact);
router.delete('/contacts/supplier/:id', checkPermission('deleteSupplier'), deleteSupplierContact);
router.get('/contacts/:type/:id', checkPermission('viewAllSupplier'), getSupplierContactById);
router.delete('/contacts/supplier', checkPermission('deleteSupplier'), deleteAllSupplierContacts);

// customer routes
router.post('/contacts/customer', checkPermission('addCustomer'), createCustomerContact);
router.put('/contacts/customer/:id', checkPermission('editCustomer'), updateCustomerContact);
router.delete('/contacts/customer/:id', checkPermission('deleteCustomer'), deleteCustomerContact);
router.get('/contacts/customer/:id', checkPermission('viewAllCustomer'), getCustomerContactById);
router.delete('/contacts/customer', checkPermission('deleteCustomer'), deleteAllCustomerContacts);

module.exports = router;

