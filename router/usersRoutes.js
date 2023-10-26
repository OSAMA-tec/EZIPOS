// routes/usersRoutes.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /users
router.get('/',authMiddleware, checkPermission('viewUser'), usersController.getAllUsers);

// POST /users
router.post('/',authMiddleware, checkPermission('addUser'), usersController.createUser);

// PUT /users/:id
router.put('/:id',authMiddleware, checkPermission('editUser'), usersController.updateUser);

// DELETE /users/:id
router.delete('/:id', authMiddleware,checkPermission('deleteUser'), usersController.deleteUser);

// Get /userbyid
router.get('/:id',authMiddleware, checkPermission('viewUser'), usersController.getUserById);

module.exports = router;