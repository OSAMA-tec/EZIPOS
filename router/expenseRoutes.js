const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const {checkPermission} = require('../middleware/checkPermission');
const authMiddleware = require('../middleware/authMiddleware'); 

// Routes for expenses
router.post('/',authMiddleware, checkPermission('addExpense'), expenseController.createExpense);

router.put('/:id',authMiddleware, checkPermission('editExpense'), expenseController.updateExpense);

router.delete('/:id',authMiddleware, checkPermission('deleteExpense'), expenseController.deleteExpense);

router.get('/:id',authMiddleware, checkPermission('accessAlleEpenses'), expenseController.getExpenseById);

router.get('/', authMiddleware,checkPermission('accessAlleEpenses'), expenseController.getAllExpenses);

module.exports = router;