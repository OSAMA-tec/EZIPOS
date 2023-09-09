// accountController.js

const Account = require('../models/addAccount');

// Controller for POST /add-accounts
exports.createAccount = async (req, res) => {
    const accountData = req.body;

    try {
        const newAccount = await Account.create(accountData);
        res.status(201).json({ message: 'Account added successfully', account: newAccount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for PUT /add-accounts/:id
exports.updateAccount = async (req, res) => {
    const accountId = req.params.id;
    const accountData = req.body;

    try {
        const updatedAccount = await Account.findByIdAndUpdate(accountId, accountData, { new: true });

        if (!updatedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }

        res.status(200).json({ message: 'Account updated successfully', account: updatedAccount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for DELETE /add-accounts/:id
exports.deleteAccount = async (req, res) => {
    const accountId = req.params.id;

    try {
        const deletedAccount = await Account.findByIdAndDelete(accountId);

        if (!deletedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }

        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for GET /add-accounts/:id
exports.getAccountById = async (req, res) => {
    const accountId = req.params.id;

    try {
        const account = await Account.findById(accountId);

        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }

        res.status(200).json(account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for GET /add-accounts
exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json(accounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
