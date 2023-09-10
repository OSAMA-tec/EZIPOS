
const Sale = require('../../../models/addSale');
const Product = require('../../../models/addProduct');
const Brand = require('../../../models/brand');

const profitbyType=async (req, res) => {
  try {
    const { type } = req.params;
    const sales = await Sale.find();
    const products = await Product.find();
    const brands = await Brand.find();

    // Calculate profit based on the selected type
    switch (type) {
      case 'product':
      try {
        const sales = await Sale.find().populate('productName');    
        const productProfits = products.map(product => {
          const productSales = sales.filter(sale => sale.productName._id.toString() === product._id.toString());
          const totalSales = productSales.reduce((acc, sale) => acc + sale.totalPrice, 0);
          const totalPurchase = productSales.reduce((acc, sale) => acc + sale.unitPrice * sale.quantity, 0);
          const profit = totalSales - totalPurchase;
    
          return {
            productName: product.productName,
            profit
          };
        });
    
        res.json(productProfits);
      } catch (error) {
        res.status(500).json({ message: 'Error calculating profit by product', error });
      }        break;
      case 'category':
      async function calculateProfitByCategory() {
        const sales = await Sale.find().populate('productName');
      
        const productProfits = sales.reduce((acc, sale) => {
          const productId = sale.productName._id;
          const revenue = sale.unitPrice * sale.quantity;
          const cogs = sale.productName.costPrice * sale.quantity; 
      
          if (!acc[productId]) {
            acc[productId] = { revenue: 0, cogs: 0 };
          }
      
          acc[productId].revenue += revenue;
          acc[productId].cogs += cogs;
      
          return acc;
        }, {});
      
        const categoryProfits = {};
      
        for (const productId in productProfits) {
          const product = await Product.findById(productId).populate('category');
          const categoryId = product.category._id;
      
          if (!categoryProfits[categoryId]) {
            categoryProfits[categoryId] = { revenue: 0, cogs: 0 };
          }
      
          categoryProfits[categoryId].revenue += productProfits[productId].revenue;
          categoryProfits[categoryId].cogs += productProfits[productId].cogs;
        }
      
        const profits = {};
      
        for (const categoryId in categoryProfits) {
          const category = await Category.findById(categoryId);
          const profit = categoryProfits[categoryId].revenue - categoryProfits[categoryId].cogs;
      
          profits[category.categoryName] = profit;
        }
      
        return profits;
      }
      
      calculateProfitByCategory()
        .then(profits =>         res.json(profits))
        .catch(err => res.json(err));
        break;
      case 'brand':
      async function calculateProfitByBrand() {
        const sales = await Sale.find().populate('productName');
      
        const productProfits = sales.reduce((acc, sale) => {
          const productId = sale.productName._id;
          const revenue = sale.unitPrice * sale.quantity;
          const cogs = sale.productName.costPrice * sale.quantity; 
      
          if (!acc[productId]) {
            acc[productId] = { revenue: 0, cogs: 0 };
          }
      
          acc[productId].revenue += revenue;
          acc[productId].cogs += cogs;
      
          return acc;
        }, {});
      
        const brandProfits = {};
      
        for (const productId in productProfits) {
          const product = await Product.findById(productId).populate('brand');
          const brandId = product.brand._id;
      
          if (!brandProfits[brandId]) {
            brandProfits[brandId] = { revenue: 0, cogs: 0 };
          }
      
          brandProfits[brandId].revenue += productProfits[productId].revenue;
          brandProfits[brandId].cogs += productProfits[productId].cogs;
        }
      
        const profits = {};
      
        for (const brandId in brandProfits) {
          const brand = await Brand.findById(brandId);
          const profit = brandProfits[brandId].revenue - brandProfits[brandId].cogs;
      
          profits[brand.brandName] = profit;
        }
      
        return profits;
      }
      
      calculateProfitByBrand()
        .then(profits => res.json(profits))
        .catch(err => res.json(err));
        break;
      case 'location':
        // Calculate profit by location
        break;
      case 'invoice':
        // Calculate profit by invoice
        break;
      case 'customer':
        // Calculate profit by customer
        break;
      case 'day':
        // Calculate profit by day
        break;
      default:
        return res.status(400).json({ message: 'Invalid profit type' });
    }

    // Return the calculated profit
    res.json({ profit: 'Calculated profit goes here' });
  } catch (error) {
    res.status(500).json({ message: 'Error calculating profit', error });
  }
};

module.exports = {profitbyType};