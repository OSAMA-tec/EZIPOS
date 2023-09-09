// routes/rolesRoutes.js
const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');

// GET /roles
router.get('/', rolesController.getAllRoles);

// POST /roles
router.post('/', rolesController.createRole);

// PUT /roles/:id
router.put('/:id', rolesController.updateRole);

// DELETE /roles/:id
router.delete('/:id', rolesController.deleteRole);

module.exports = router;
