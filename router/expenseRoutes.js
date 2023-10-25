const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const {checkPermission} = require('../middleware/checkPermission');

// Routes for expenses
router.post('/', checkPermission('addExpense'), expenseController.createExpense);

router.put('/:id', checkPermission('editExpense'), expenseController.updateExpense);

router.delete('/:id', checkPermission('deleteExpense'), expenseController.deleteExpense);

router.get('/:id', checkPermission('accessAlleEpenses'), expenseController.getExpenseById);

router.get('/', checkPermission('accessAlleEpenses'), expenseController.getAllExpenses);

module.exports = router;