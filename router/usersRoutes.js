// routes/usersRoutes.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /users
router.get('/', checkPermission('viewUser'), usersController.getAllUsers);

// POST /users
router.post('/', checkPermission('addUser'), usersController.createUser);

// PUT /users/:id
router.put('/:id', checkPermission('editUser'), usersController.updateUser);

// DELETE /users/:id
router.delete('/:id', checkPermission('deleteUser'), usersController.deleteUser);

// Get /userbyid
router.get('/:id', checkPermission('viewUser'), usersController.getUserById);

module.exports = router;