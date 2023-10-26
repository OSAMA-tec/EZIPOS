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

router.get('/contacts/:type',authMiddleware, checkPermission('viewAllCustomer'), getAllContacts);

router.get('/contacts/:type/export',authMiddleware, checkPermission('viewExport'), exportContacts);

// supplier routes
router.post('/contacts/:type',authMiddleware, checkPermission('addSupplier'), createSupplierContact);
router.put('/contacts/supplier/:id',authMiddleware, checkPermission('editSupplier'), updateSupplierContact);
router.delete('/contacts/supplier/:id',authMiddleware, checkPermission('deleteSupplier'), deleteSupplierContact);
router.get('/contacts/:type/:id',authMiddleware, checkPermission('viewAllSupplier'), getSupplierContactById);
router.delete('/contacts/supplier',authMiddleware, checkPermission('deleteSupplier'), deleteAllSupplierContacts);

// customer routes
router.post('/contacts/customer',authMiddleware, checkPermission('addCustomer'), createCustomerContact);
router.put('/contacts/customer/:id',authMiddleware, checkPermission('editCustomer'), updateCustomerContact);
router.delete('/contacts/customer/:id',authMiddleware, checkPermission('deleteCustomer'), deleteCustomerContact);
router.get('/contacts/customer/:id', authMiddleware,checkPermission('viewAllCustomer'), getCustomerContactById);
router.delete('/contacts/customer',authMiddleware, checkPermission('deleteCustomer'), deleteAllCustomerContacts);

module.exports = router;

