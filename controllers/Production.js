const Production=require('../models/Production')

const getAllProduction = async (req, res) => {
    try {
      const productionData = await Production.find().populate('Product', 'name').lean();
  
      productionData.forEach((production) => {
        const ingredientCost = production.ingredients.reduce(
          (total, ingredient) => total + ingredient.price,
          0
        );
        production.totalCost = production.productionCost + ingredientCost;
      });
  
      res.status(200).json(productionData);
    } catch (error) {
      console.error('Error fetching production data:', error);
      res.status(500).json({ error: 'Failed to fetch production data' });
    }
  };
  
  const createNewProduction = async (req, res) => {
    try {
      const newProduction = await Production.create(req.body);
      res.status(201).json(newProduction);
    } catch (error) {
      console.error('Error creating new production:', error);
      res.status(500).json({ error: 'Failed to create new production' });
    }
  };
  const viewProductionById = async (req, res) => {
    try {
      const productionId = req.params.id; 
  
      
      const production = await Production.findById(productionId);
  
      if (!production) {
        return res.status(404).json({ error: 'Production not found' });
      }
  
      res.status(200).json(production);
    } catch (error) {
      console.error('Error fetching production by ID:', error);
      res.status(500).json({ error: 'Failed to fetch production' });
    }
  };

  const updateProductionById = async (req, res) => {
    try {
      const productionId = req.params.id; 
      const updatedData = req.body; 
  
      
      const updatedProduction = await Production.findByIdAndUpdate(
        productionId,
        updatedData,
        { new: true }
      );
  
      if (!updatedProduction) {
        return res.status(404).json({ error: 'Production not found' });
      }
  
      res.status(200).json(updatedProduction);
    } catch (error) {
      console.error('Error updating production by ID:', error);
      res.status(500).json({ error: 'Failed to update production' });
    }
  };
module.exports={getAllProduction,createNewProduction,viewProductionById,updateProductionById};