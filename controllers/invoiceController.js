const Invoice = require('../models/invoice');

exports.createInvoice = async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateInvoiceById = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedInvoice = await Invoice.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatedInvoice) {
        return res.status(404).json({ message: 'Invoice not found' });
      }
      res.json(updatedInvoice);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


exports.deleteInvoiceById = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedInvoice = await Invoice.findByIdAndRemove(id);
      if (!deletedInvoice) {
        return res.status(404).json({ message: 'Invoice not found' });
      }
      res.json({ message: 'Invoice deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Controller: controllers/invoiceController.js
exports.viewInvoiceById = async (req, res) => {
    try {
      const { id } = req.params;
      const invoice = await Invoice.findById(id);
      if (!invoice) {
        return res.status(404).json({ message: 'Invoice not found' });
      }
      res.json(invoice);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Controller: controllers/invoiceController.js
exports.viewAllInvoices = async (req, res) => {
    try {
      const invoices = await Invoice.find();
      res.json(invoices);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  