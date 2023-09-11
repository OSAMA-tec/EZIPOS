// routes/rolesRoutes.js
const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');
const authMiddleware = require('../../middleware/authMiddleware');

// GET /roles
router.get('/',authMiddleware, rolesController.getAllRoles);

// POST /roles
router.post('/',authMiddleware, rolesController.createRole);

// PUT /roles/:id
router.put('/:id',authMiddleware, rolesController.updateRole);

// DELETE /roles/:id
router.delete('/:id', authMiddleware,rolesController.deleteRole);

module.exports = router;
