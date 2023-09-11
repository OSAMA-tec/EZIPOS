const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const authMiddleware = require('../../middleware/authMiddleware');


// Routes for accounts
router.post('/',authMiddleware, accountController.createAccount);

router.put('/:id',authMiddleware, accountController.updateAccount);

router.delete('/:id',authMiddleware, accountController.deleteAccount);

router.get('/:id',authMiddleware, accountController.getAccountById);

router.get('/',authMiddleware, accountController.getAllAccounts);

module.exports = router;
