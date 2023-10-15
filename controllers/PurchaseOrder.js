
const PurchaseOrder=require("../models/PurchaseOrder");
const Contact = require('../models/Supplier'); 
const getAllPurchaseOrder = async (req, res) => {
    try {
        const { businessLocation, supplier, shippingStatus } = req.query;

        const query = {};

        if (businessLocation) {
            query.businessLocation = businessLocation;
        }

        if (supplier) {
            query.supplier = supplier;
        }

        if (shippingStatus) {
            query.shippingStatus = shippingStatus;
        }

        const purchaseOrders = await PurchaseOrder.find(query);

        res.status(200).json(purchaseOrders);
    } catch (error) {
        console.error('Error fetching purchase orders:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




const addPurchaseOrder = async (req, res) => {
    try {
        const purchaseOrderData = req.body;
        
        const supplierContacts = await Contact.find({ contactType: 'supplier' })
            .select('firstName businessName');
        
        const newPurchaseOrder = new PurchaseOrder(purchaseOrderData);
        const savedPurchaseOrder = await newPurchaseOrder.save();
        
        res.status(201).json({
            purchaseOrder: savedPurchaseOrder,
            supplierContacts: supplierContacts
        });
    } catch (error) {
        console.error('Error adding purchase order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updatePurchaseOrder = async (req, res) => {
    try {
        const purchaseOrderId = req.params.id; 
        const updateData = req.body;
        
        const updatedPurchaseOrder = await PurchaseOrder.findByIdAndUpdate(
            purchaseOrderId,
            updateData,
            { new: true } 
        );
        
        if (!updatedPurchaseOrder) {
            return res.status(404).json({ error: 'Purchase order not found' });
        }
        
        res.status(200).json(updatedPurchaseOrder);
    } catch (error) {
        console.error('Error updating purchase order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const deletePurchaseOrder = async (req, res) => {
    try {
        const purchaseOrderId = req.params.id; 
        
        
        const deletedPurchaseOrder = await PurchaseOrder.findByIdAndDelete(purchaseOrderId);
        
        if (!deletedPurchaseOrder) {
            return res.status(404).json({ error: 'Purchase order not found' });
        }
        
        res.status(200).json({ message: 'Purchase order deleted successfully' });
    } catch (error) {
        console.error('Error deleting purchase order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports={getAllPurchaseOrder,addPurchaseOrder,updatePurchaseOrder,deletePurchaseOrder};
