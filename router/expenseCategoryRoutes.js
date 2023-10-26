const express = require('express');
const router = express.Router();
const draftsController = require('../controllers/draftsController');
const {checkPermission} = require('../middleware/checkPermission');
const authMiddleware = require('../middleware/authMiddleware'); 

// GET /drafts/all-records
router.get('/all-records',authMiddleware, checkPermission('viewAllDrafts'), draftsController.getAllDrafts);

// POST /drafts
router.post('/',authMiddleware, checkPermission('editDraft'), draftsController.createDraft);

// GET /drafts/:id
router.get('/:id', authMiddleware,checkPermission('viewAllDrafts'), draftsController.getDraftById);

// PUT /drafts/:id
router.put('/:id',authMiddleware, checkPermission('editDraft'), draftsController.updateDraft);

// DELETE /drafts/:id
router.delete('/:id',authMiddleware, checkPermission('deleteDraft'), draftsController.deleteDraft);

module.exports = router;