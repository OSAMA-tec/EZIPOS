const PurchaseReturn = require('../models/PurchaseReturn');

const getAllPurchase = async (req, res) => {
    try {
        
        const purchaseReturns = await PurchaseReturn.find();

        res.status(200).json(purchaseReturns);
    } catch (error) {
        console.error('Error fetching purchase returns:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const updatePurchaseReturnById = async (req, res) => {
    try {
        const purchaseReturnId = req.params.id; 
        const updateData = req.body; 

        
        const updatedPurchaseReturn = await PurchaseReturn.findByIdAndUpdate(
            purchaseReturnId,
            updateData,
            { new: true } 
        );

        if (!updatedPurchaseReturn) {
            return res.status(404).json({ error: 'Purchase return not found' });
        }

        res.status(200).json(updatedPurchaseReturn);
    } catch (error) {
        console.error('Error updating purchase return:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const createPurchaseReturn = async (req, res) => {
    try {
        const newPurchaseReturnData = req.body; 
        const newPurchaseReturn = new PurchaseReturn(newPurchaseReturnData);

        
        const savedPurchaseReturn = await newPurchaseReturn.save();

        res.status(201).json(savedPurchaseReturn);
    } catch (error) {
        console.error('Error creating purchase return:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const deletePurchaseReturnById = async (req, res) => {
    try {
        const deletedPurchaseReturn = await PurchaseReturn.findByIdAndRemove(purchaseReturnId);

        if (!deletedPurchaseReturn) {
            return res.status(404).json({ error: 'Purchase return not found' });
        }

        res.status(200).json({ message: 'Purchase return deleted successfully' });
    } catch (error) {
        console.error('Error deleting purchase return:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



module.exports={getAllPurchase,updatePurchaseReturnById,createPurchaseReturn,deletePurchaseReturnById};