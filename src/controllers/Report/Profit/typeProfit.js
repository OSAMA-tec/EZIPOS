
const Sale = require('../../../models/addSale');
const Product = require('../../../models/addProduct');
const Brand = require('../../../models/brand');

const profitbyType=async (req, res) => {
  try {
    const type  = req.body.type;
    const sales = await Sale.find();
    const products = await Product.find();
    const brands = await Brand.find();

    switch (type) {
      case 'product':
      try {
        const sales = await Sale.find().populate('productName');    
      
        if (!sales.length) {
          return res.json({ message: 'No sales data available' });
        }
      
        const productProfits = products.map(product => {
          const productSales = sales.filter(sale => sale.productName._id.toString() === product._id.toString());
          const totalSales = productSales.reduce((acc, sale) => acc + sale.totalPrice, 0);
          const totalPurchase = productSales.reduce((acc, sale) => acc + sale.unitPrice * sale.quantity, 0);
          const profit = totalSales - totalPurchase;
      
          if (profit <= 0) {
            return {
              productName: product.productName,
              profit: "No profit"
            };
          } else {
            return {
              productName: product.productName,
              profit
            };
          }
        });
        res.json(productProfits);
      } catch (error) {
        res.status(500).json({ message: 'Error calculating profit by product', error });
      } 
      
        break;
      case 'category':
      try {
        async function calculateProfitByCategory() {
          const sales = await Sale.find().populate('productName');
      
          if (!sales.length) {
            return res.json({ message: 'No sales data available' });
          }
      
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
            if (profit <= 0) {
              profits[category.categoryName] = "No profit";
            } else {
              profits[category.categoryName] = profit;
            }
          }
      
          return profits;
        }
      
        calculateProfitByCategory()
          .then(profits => res.json(profits))
          .catch(err => res.json(err));
      } catch (error) {
        res.status(500).json({ message: 'Error calculating profit by category', error });
      }
      
      
        break;
      case 'brand':
      async function calculateProfitByBrand() {
        const sales = await Sale.find().populate('productName');
      
        if (!sales.length) {
          return res.json({ message: 'No sales data available' });
        }
      
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
          if (profit <= 0) {
            profits[brand.brandName] = "No profit";
          } else {
            profits[brand.brandName] = profit;
          }
        }
      
        return profits;
      }
      
      calculateProfitByBrand()
        .then(profits => res.json(profits))
        .catch(err => res.json(err));
      
        break;
      case 'customer':
      try {
        const sales = await Sale.find().populate('customerName');
      
        if (!sales.length) {
          return res.json({ message: 'No sales data available' });
        }
      
        const customerProfits = sales.reduce((acc, sale) => {
          const customerId = sale.customerName._id;
          const revenue = sale.unitPrice * sale.quantity;
          const cogs = sale.productName.costPrice * sale.quantity;
          if (!acc[customerId]) {
            acc[customerId] = { revenue: 0, cogs: 0 };
          }
          acc[customerId].revenue += revenue;
          acc[customerId].cogs += cogs;
          return acc;
        }, {});
      
        const profits = {};
        for (const customerId in customerProfits) {
          const customer = await Customer.findById(customerId);
          const profit = customerProfits[customerId].revenue - customerProfits[customerId].cogs;
          if (profit <= 0) {
            profits[customer.customerName] = "No profit";
          } else {
            profits[customer.customerName] = profit;
          }
        }
        res.json(profits);
      } catch (error) {
        res.status(500).json({ message: 'Error calculating profit by customer', error });
      } 
      
        break;        
      case 'day':
        // Calculate profit by day
        break;
      default:
        return res.status(400).json({ message: 'Invalid profit type' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error calculating profit', error });
  }
};

module.exports = {profitbyType};
