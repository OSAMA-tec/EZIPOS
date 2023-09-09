const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');


// Routes for accounts
router.post('/', accountController.createAccount);

router.put('/:id', accountController.updateAccount);

router.delete('/:id', accountController.deleteAccount);

router.get('/:id', accountController.getAccountById);

router.get('/', accountController.getAllAccounts);

module.exports = router;
