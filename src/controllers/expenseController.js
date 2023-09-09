// expenseController.js

const Expense = require('../models/addExpense');

// Controller for POST /add-expenses
exports.createExpense = async (req, res) => {
    const expenseData = req.body;

    try {
        const newExpense = await Expense.create(expenseData);
        res.status(201).json({ message: 'Expense added successfully', expense: newExpense });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for PUT /add-expenses/:id
exports.updateExpense = async (req, res) => {
    const expenseId = req.params.id;
    const expenseData = req.body;

    try {
        const updatedExpense = await Expense.findByIdAndUpdate(expenseId, expenseData, { new: true });

        if (!updatedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.status(200).json({ message: 'Expense updated successfully', expense: updatedExpense });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for DELETE /add-expenses/:id
exports.deleteExpense = async (req, res) => {
    const expenseId = req.params.id;

    try {
        const deletedExpense = await Expense.findByIdAndDelete(expenseId);

        if (!deletedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for GET /add-expenses/:id
exports.getExpenseById = async (req, res) => {
    const expenseId = req.params.id;

    try {
        const expense = await Expense.findById(expenseId);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.status(200).json(expense);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for GET /add-expenses
exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
