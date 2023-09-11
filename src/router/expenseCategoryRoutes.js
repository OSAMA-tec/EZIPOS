const express = require('express');
const router = express.Router();
const expenseCategoryController = require('../controllers/expenseCategoryController');
const authMiddleware = require('../../middleware/authMiddleware');


// Routes for expense categories
router.post('/',authMiddleware, expenseCategoryController.createExpenseCategory);

router.put('/:id',authMiddleware, expenseCategoryController.updateExpenseCategory);

router.delete('/:id',authMiddleware, expenseCategoryController.deleteExpenseCategory);

router.get('/',authMiddleware, expenseCategoryController.getAllExpenseCategories);

module.exports = router;
