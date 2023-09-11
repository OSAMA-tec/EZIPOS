// routes/draftsRoutes.js
const express = require('express');
const router = express.Router();
const draftsController = require('../controllers/draftsController');
const authMiddleware = require('../../middleware/authMiddleware');

// GET /drafts/all-records
router.get('/all-records',authMiddleware, draftsController.getAllDrafts);

// POST /drafts
router.post('/',authMiddleware, draftsController.createDraft);

// GET /drafts/:id
router.get('/:id',authMiddleware, draftsController.getDraftById);

// PUT /drafts/:id
router.put('/:id',authMiddleware, draftsController.updateDraft);

// DELETE /drafts/:id
router.delete('/:id', authMiddleware,draftsController.deleteDraft);

module.exports = router;
