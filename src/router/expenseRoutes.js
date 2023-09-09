const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');


// Routes for expenses
router.post('/', expenseController.createExpense);

router.put('/:id', expenseController.updateExpense);

router.delete('/:id', expenseController.deleteExpense);

router.get('/:id', expenseController.getExpenseById);

router.get('/', expenseController.getAllExpenses);

module.exports = router;
