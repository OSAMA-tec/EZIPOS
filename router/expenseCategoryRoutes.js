const express = require('express');
const router = express.Router();
const expenseCategoryController = require('../controllers/expenseCategoryController');


// Routes for expense categories
router.post('/', expenseCategoryController.createExpenseCategory);

router.put('/:id', expenseCategoryController.updateExpenseCategory);

router.delete('/:id', expenseCategoryController.deleteExpenseCategory);

router.get('/', expenseCategoryController.getAllExpenseCategories);

module.exports = router;
