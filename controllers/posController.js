// controllers/salesController.js
const Pos = require('../models/addPos');
const Invoice = require('../models/invoice');
const Quotation = require('../models/addQuotations');
const Draft = require('../models/addDraft');

async function generateInvoiceNumber() {
    const invoice = await Invoice.findOne({ setAsDefault: true }); // Assuming you have only one document for invoices
    let currentInvoiceNumber = invoice.currentInvoiceNumber;
    let prefix= invoice.namePrefix;
    let numberOfDigits = invoice.numberOfDigits
    let startFrom = invoice.startFrom
    // Use the specified starting number if provided
    if (startFrom === 0) {
        currentInvoiceNumber = invoice.startFrom;
    }

    // Increment the invoice number
    currentInvoiceNumber++;

    // Update the currentInvoiceNumber in the database
    await Invoice.findOneAndUpdate({setAsDefault: true}, { currentInvoiceNumber });

    // Generate the formatted invoice number
    if (prefix === '') {
        return currentInvoiceNumber.toString().padStart(numberOfDigits, '0');
    } else {
        // const currentYear = new Date().getFullYear();
        return `${prefix}-${currentInvoiceNumber.toString().padStart(numberOfDigits, '0')}`;
    }

    return null; // Invalid format
}
// Get all sales
exports.getAllPosSales = async (req, res) => {
    const saleType = req.params.type;
    try{
        if(saleType === 'draft'){

            const drafts = await Draft.find();
            res.status(200).json(drafts);
        }
        else if(saleType === 'quotations'){
            const quotations = await Quotation.find();
            res.status(200).json(quotations);
        }
        else {
            const sales = await Pos.find();
            res.status(200).json(sales);
        }
    }
    
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new sale

exports.createPosSale = async (req, res) => {
    const saleData = req.body;
    const saleType = req.params.type;

    try {
        if(saleType === 'draft'){
            const newDraft = await Draft.create(saleData);
            res.status(201).json({ message: 'Draft added successfully', draft: newDraft });
        }
        else if(saleType === 'quotations'){
            const newQuotation = await Quotation.create(saleData);
            res.status(201).json({ message: 'Quotation added successfully', quotation: newQuotation });
        }
        else{
            // const invoiceScheme = saleData.invoiceScheme;
            // const invoicePrefix = invoiceScheme.namePrefix;
            // const startFrom = invoiceScheme.startFrom; // Get the starting number from the sale data
            // const numberOfDigits = invoiceScheme.numberOfDigits; // Get the number of digits from the sale data
            if(saleData.invoiceNumber === ""){
                const generatedInvoiceNumber = await generateInvoiceNumber();
                saleData.invoiceNumber = generatedInvoiceNumber;

            }
    
            // Add the generated invoice number to the sale data
            let totalSaleAmount=0
            // console.log(saleData.invoiceNumber)
            saleData.inputData.forEach((item) => {
                totalSaleAmount += item.subtotal;
              });

            const newSale = new Pos({
                totalSaleAmount: totalSaleAmount,
                ...saleData
              });
              const saleSaved = await newSale.save();
            // const newSale = await Sale.create(saleData);
            // console.log(newSale)
            res.status(201).json({ message: 'Sale added successfully', sale: saleSaved });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
// exports.createSale = async (req, res) => {
//     const saleData = req.body;

//     try {
//         const newSale = await Sale.create(saleData);
//         res.status(201).json({ message: 'Sale added successfully', sale: newSale });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// Get a sale by ID
exports.getPosSaleById = async (req, res) => {
    const saleId = req.params.id;
    const saleType = req.params.type;

        

    try {
        if(saleType === 'draft'){
            const draft = await Draft.findById(saleId);

            if (!draft) {
                return res.status(404).json({ message: 'Draft not found' });
            }
    
            res.status(200).json(draft);
        }

        else if(saleType === 'quotations'){
            const quotation = await Quotation.findById(saleId);

            if (!quotation) {
                return res.status(404).json({ message: 'Quotation not found' });
            }
    
            res.status(200).json(quotation);
        }

        else{
            const sale = await Pos.findById(saleId);

            if (!sale) {
                return res.status(404).json({ message: 'Sale not found' });
            }
    
            res.status(200).json(sale);
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a sale
exports.updatePosSale = async (req, res) => {
    const saleId = req.params.id;
    const saleData = req.body;
    const saleType = req.params.type;

        

    try {
        if(saleType === 'draft'){
            const updatedDraft = await Draft.findByIdAndUpdate(saleId, saleData, { new: true });

            if (!updatedDraft) {
                return res.status(404).json({ message: 'Draft not found' });
            }
    
            res.status(200).json({ message: 'Draft updated successfully', draft: updatedDraft });
        }

        else if(saleType === 'quotations'){
            const updatedQuotation = await Quotation.findByIdAndUpdate(saleId, saleData, { new: true });

            if (!updatedQuotation) {
                return res.status(404).json({ message: 'Quotation not found' });
            }
    
            res.status(200).json({ message: 'Quotation updated successfully', quotation: updatedQuotation });
        }

        else {
            const updatedSale = await Pos.findByIdAndUpdate(saleId, saleData, { new: true });

            if (!updatedSale) {
                return res.status(404).json({ message: 'Sale not found' });
            }
    
            res.status(200).json({ message: 'Sale updated successfully', sale: updatedSale });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a sale
exports.deletePosSale = async (req, res) => {
    const saleType = req.params.type;
    const saleId = req.params.id;

    try {
        if(saleType === 'draft'){
            const deletedDraft = await Draft.findByIdAndDelete(saleId);

            if (!deletedDraft) {
                return res.status(404).json({ message: 'Draft not found' });
            }
    
            res.status(200).json({ message: 'Draft deleted successfully' });
        }
    
        else if(saleType === 'quotations'){
            const deletedQuotation = await Quotation.findByIdAndDelete(saleId);

            if (!deletedQuotation) {
                return res.status(404).json({ message: 'Quotation not found' });
            }
    
            res.status(200).json({ message: 'Quotation deleted successfully' });
        }
    
        else {
            const deletedSale = await Pos.findByIdAndDelete(saleId);

            if (!deletedSale) {
                return res.status(404).json({ message: 'Sale not found' });
            }
    
            res.status(200).json({ message: 'Sale deleted successfully' });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// GET /shipments/:status
exports.salePosShipment = async (req, res) => {
    // const shipmentStatus = req.params.status;
    // if (!shipmentStatus || shipmentStatus.trim() === '') {
    //     return res.status(400).json({ message: 'Please provide a valid shipment status' });
    //   }

    try {
        const shipments = await Pos.find({ shippingStatus: { $ne: "" } });
        res.status(200).json(shipments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};