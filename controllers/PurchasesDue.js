const PurchasesDue = require('../models/PurchasesDue');

const getAllPurchases = async (req, res) => {
    try {
        const { businessLocation, supplier, purchaseStatus, paymentStatus } = req.query;

        // Create a query object to filter purchases
        const query = {};

        if (businessLocation) {
            query.businessLocation = businessLocation;
        }

        if (supplier) {
            query.supplier = supplier;
        }

        if (purchaseStatus) {
            query.purchaseStatus = purchaseStatus;
        }

        if (paymentStatus) {
            query.paymentStatus = paymentStatus;
        }

        const purchases = await PurchasesDue.find(query);

        
        let grandTotal = 0;
        let paymentDue = 0;

        const simplifiedPurchases = purchases.map((purchase) => {
           
            const total = purchase.advanceBalnce + purchase.shippingCharges + purchase.purchaseTax;

            
            grandTotal += total;

            
            const paymentDueForPurchase = total - purchase.advanceBalnce;

            // Update paymentDue
            paymentDue += paymentDueForPurchase;

            // Extract only the fields you need
            const {
                purchaseDate,
                supplier,
                ReferenceNo,
                businessLocation,
                purchaseStatus,
                paymentStatus,
            } = purchase;

            
            const simplifiedPurchase = {
                purchaseDate,
                supplier,
                ReferenceNo,
                businessLocation,
                purchaseStatus,
                paymentStatus,
                total,
                paymentDue: paymentDueForPurchase,
            };

            return simplifiedPurchase;
        });

        
        const totals = {
            grandTotal,
            paymentDue,
        };

        res.status(200).json({ purchases: simplifiedPurchases, totals });
    } catch (error) {
        console.error('Error fetching purchases:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const createNewPurchase=async(req,res)=>{
    try {
        const newPurchase= req.body;
        const newPurchaseGroup = new PurchasesDue(newPurchase);
        const savedPurchase = await newPurchaseGroup.save();
        res.status(201).json(savedPurchase);
    } catch (error) {
        console.error('Error creating customer group:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }


}

const updatePurchase = async (req, res) => {
    try {
        const purchaseId = req.params.id; 
        const updateData = req.body; 

       
        const updatedPurchase = await PurchasesDue.findByIdAndUpdate(
            purchaseId,
            updateData,
            { new: true } 
        );

        if (!updatedPurchase) {
            return res.status(404).json({ error: 'Purchase not found' });
        }

        res.status(200).json(updatedPurchase);
    } catch (error) {
        console.error('Error updating purchase:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const deletePurchaseById = async (req, res) => {
    try {
        const purchaseId = req.params.id; 

       
        const deletedPurchase = await PurchasesDue.findByIdAndRemove(purchaseId);

        if (!deletedPurchase) {
            return res.status(404).json({ error: 'Purchase not found' });
        }

        res.status(200).json({ message: 'Purchase deleted successfully', deletedPurchase });
    } catch (error) {
        console.error('Error deleting purchase:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




module.exports={getAllPurchases,createNewPurchase,updatePurchase,deletePurchaseById};