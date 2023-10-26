const express = require('express');
const router = express.Router();
const draftsController = require('../controllers/draftsController');
const {checkPermission} = require('../middleware/checkPermission'); 
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /drafts/all-records
router.get('/all-records', checkPermission('viewAllDrafts'), draftsController.getAllDrafts);

// POST /drafts
router.post('/', checkPermission('editDraft'), draftsController.createDraft);

// GET /drafts/:id
router.get('/:id', checkPermission('viewAllDrafts'), draftsController.getDraftById);

// PUT /drafts/:id
router.put('/:id', checkPermission('editDraft'), draftsController.updateDraft);

// DELETE /drafts/:id
router.delete('/:id', checkPermission('deleteDraft'), draftsController.deleteDraft);

module.exports = router;