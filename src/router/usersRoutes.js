// routes/usersRoutes.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// GET /users
router.get('/', usersController.getAllUsers);

// POST /users
router.post('/', usersController.createUser);

// PUT /users/:id
router.put('/:id', usersController.updateUser);

// DELETE /users/:id
router.delete('/:id', usersController.deleteUser);

module.exports = router;
