
const CustomerGroup=require('../models/CustomerGroup')
const getAllCustomerGroups = async (req, res) => {
    
   
    try {
        const customerGroups = await CustomerGroup.find();
        res.status(200).json(customerGroups);
    } catch (error) {
        console.error('Error fetching customer groups:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const createCustomerGroup = async (req, res) => {
    try {
        const newCustomerGroupData = req.body;
        const newCustomerGroup = new CustomerGroup(newCustomerGroupData);
        const savedCustomerGroup = await newCustomerGroup.save();
        res.status(201).json(savedCustomerGroup);
    } catch (error) {
        console.error('Error creating customer group:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateCustomerGroup = async (req, res) => {
    const groupId = req.params.id;
    const updatedData = req.body;

    try {
        const updatedCustomerGroup = await CustomerGroup.findByIdAndUpdate(groupId, updatedData, { new: true });
        
        if (updatedCustomerGroup) {
            res.status(200).json(updatedCustomerGroup);
        } else {
            res.status(404).json({ error: 'Customer Group not found' });
        }
    } catch (error) {
        console.error('Error updating customer group:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteCustomerGroup = async (req, res) => {
    const groupId = req.params.id;

    try {
        const deletedCustomerGroup = await CustomerGroup.findByIdAndDelete(groupId);
        
        if (deletedCustomerGroup) {
            res.status(200).json({ message: 'Customer Group deleted successfully' });
        } else {
            res.status(404).json({ error: 'Customer Group not found' });
        }
    } catch (error) {
        console.error('Error deleting customer group:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports={getAllCustomerGroups,createCustomerGroup,updateCustomerGroup, deleteCustomerGroup};