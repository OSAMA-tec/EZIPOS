const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const authMiddleware = require('../../middleware/authMiddleware');


// Routes for expenses
router.post('/',authMiddleware, expenseController.createExpense);

router.put('/:id',authMiddleware, expenseController.updateExpense);

router.delete('/:id',authMiddleware, expenseController.deleteExpense);

router.get('/:id',authMiddleware, expenseController.getExpenseById);

router.get('/',authMiddleware, expenseController.getAllExpenses);

module.exports = router;
