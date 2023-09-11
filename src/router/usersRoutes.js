// routes/usersRoutes.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authMiddleware = require('../../middleware/authMiddleware');

// GET /users
router.get('/',authMiddleware, usersController.getAllUsers);

// POST /users
router.post('/',authMiddleware, usersController.createUser);

// PUT /users/:id
router.put('/:id',authMiddleware, usersController.updateUser);

// DELETE /users/:id
router.delete('/:id',authMiddleware, usersController.deleteUser);

module.exports = router;
