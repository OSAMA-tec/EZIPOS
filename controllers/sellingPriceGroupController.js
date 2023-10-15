const SellingPriceGroup = require('../models/sellingPriceGroup');

// Controller function to add a new selling price group
exports.addSellingPriceGroup = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const sellingPriceGroup = new SellingPriceGroup({ name, description, price });
    const savedGroup = await sellingPriceGroup.save();
    res.status(201).json(savedGroup);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to delete a selling price group by ID
exports.deleteSellingPriceGroup = async (req, res) => {
  try {
    const spgID = req.params.id;
    await SellingPriceGroup.findByIdAndDelete(spgID);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to edit a selling price group by ID
exports.editSellingPriceGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const updatedGroup = await SellingPriceGroup.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );
    res.status(200).json(updatedGroup);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all SPG
exports.getAllSellingPriceGroup = async (req, res) => {
  try {
      const spg = await SellingPriceGroup.find(); // Populate the 'role' field with role names
      res.status(200).json(spg);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for GET /SPG/:id
exports.getSellingPriceGroupById = async (req, res) => {
  const spgId = req.params.id;

  try {
      const spg = await SellingPriceGroup.findById(spgId);

      if (!spg) {
          return res.status(404).json({ message: 'spg not found' });
      }

      res.status(200).json(spg);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};