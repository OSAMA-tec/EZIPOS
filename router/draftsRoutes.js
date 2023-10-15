// routes/draftsRoutes.js
const express = require('express');
const router = express.Router();
const draftsController = require('../controllers/draftsController');

// GET /drafts/all-records
router.get('/all-records', draftsController.getAllDrafts);

// POST /drafts
router.post('/', draftsController.createDraft);

// GET /drafts/:id
router.get('/:id', draftsController.getDraftById);

// PUT /drafts/:id
router.put('/:id', draftsController.updateDraft);

// DELETE /drafts/:id
router.delete('/:id', draftsController.deleteDraft);

module.exports = router;
