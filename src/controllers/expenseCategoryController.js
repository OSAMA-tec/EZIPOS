// expenseCategoryController.js

const ExpenseCategory = require('../models/addexpenseCategory');

// Controller for POST /expense-categories
exports.createExpenseCategory = async (req, res) => {
    const categoryData = req.body;

    try {
        const newCategory = await ExpenseCategory.create(categoryData);
        res.status(201).json({ message: 'Expense category added successfully', category: newCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for PUT /expense-categories/:id
exports.updateExpenseCategory = async (req, res) => {
    const categoryId = req.params.id;
    const categoryData = req.body;

    try {
        const updatedCategory = await ExpenseCategory.findByIdAndUpdate(categoryId, categoryData, { new: true });

        if (!updatedCategory) {
            return res.status(404).json({ message: 'Expense category not found' });
        }

        res.status(200).json({ message: 'Expense category updated successfully', category: updatedCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for DELETE /expense-categories/:id
exports.deleteExpenseCategory = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const deletedCategory = await ExpenseCategory.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ message: 'Expense category not found' });
        }

        res.status(200).json({ message: 'Expense category deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for GET /expense-categories
exports.getAllExpenseCategories = async (req, res) => {
    try {
        const categories = await ExpenseCategory.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
