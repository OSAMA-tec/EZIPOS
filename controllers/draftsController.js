// controllers/draftsController.js
const Draft = require('../models/addDraft');

// Get all drafts
exports.getAllDrafts = async (req, res) => {
    try {
        const drafts = await Draft.find();
        res.status(200).json(drafts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new draft
exports.createDraft = async (req, res) => {
    const draftData = req.body;

    try {
        const newDraft = await Draft.create(draftData);
        res.status(201).json({ message: 'Draft added successfully', draft: newDraft });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a draft by ID
exports.getDraftById = async (req, res) => {
    const draftId = req.params.id;

    try {
        const draft = await Draft.findById(draftId);

        if (!draft) {
            return res.status(404).json({ message: 'Draft not found' });
        }

        res.status(200).json(draft);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a draft
exports.updateDraft = async (req, res) => {
    const draftId = req.params.id;
    const draftData = req.body;

    try {
        const updatedDraft = await Draft.findByIdAndUpdate(draftId, draftData, { new: true });

        if (!updatedDraft) {
            return res.status(404).json({ message: 'Draft not found' });
        }

        res.status(200).json({ message: 'Draft updated successfully', draft: updatedDraft });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a draft
exports.deleteDraft = async (req, res) => {
    const draftId = req.params.id;

    try {
        const deletedDraft = await Draft.findByIdAndDelete(draftId);

        if (!deletedDraft) {
            return res.status(404).json({ message: 'Draft not found' });
        }

        res.status(200).json({ message: 'Draft deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
