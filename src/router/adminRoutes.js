const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const User = require('../models/addUser');
const Role = require('../models/roles');
const Unit = require('../models/unit');
const Category = require('../models/category');
const Brand = require('../models/brand');
const Variation = require('../models/variation');
const Warranty = require('../models/warranty');
const Sale = require('../models/addSale');
const Customer = require('../models/addCustomer');//++++++++++Add from Member 2
const Supplier = require('../models/addSupplier');//++++++++++Add from Member 2
const Purchase = require('../models/addPurchase');//++++++++++Add from Member 2

const Draft = require('../models/addDraft');
const Quotation = require('../models/addQuotations');
const Discount = require('../models/addDiscount');
const StockTransfer = require('../models/addStocktransfer');
const StockAdjustment = require('../models/addStockadjustment');
const Expense = require('../models/addExpense');
const ExpenseCategory = require('../models/addexpenseCategory');
const Account = require('../models/addAccount');
const FundTransfer = require('../models/fundTransfer');
const FundDeposit = require('../models/fundDeposit');

// POST /login
router.post('/login', async (req, res) => {
    const { userName, password } = req.body;

    try {
        const user = await Admin.findOne({ userName });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Authentication successful
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// POST /Register

router.post('/register', async (req, res) => {
    // const registrationData = req.body;
    console.log(registrationData)
    try {
        const newRegistration = await Admin.create(registrationData);
        res.send(newRegistration);

        return res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find().populate('role', 'name'); // Populate the 'role' field with role names
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST /users
router.post('/users', async (req, res) => {
    const userData = req.body;

    try {
        const newUser = await User.create(userData);
        // console.log(newUser)
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /users/:id
router.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;

    try {
        await User.findByIdAndUpdate(userId, userData);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /users/:id
router.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


//View all records
router.get('/roles/all-records', async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(200).json(roles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// POST /roles
router.post('/roles', async (req, res) => {
    const roleData = req.body;

    try {
        const newRole = await Role.create(roleData);
        res.status(201).json({ message: 'Role added successfully', role: newRole });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /roles/:id
router.put('/roles/:id', async (req, res) => {
    const roleId = req.params.id;
    const roleData = req.body;

    try {
        await Role.findByIdAndUpdate(roleId, roleData);
        res.status(200).json({ message: 'Role updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /roles/:id
router.delete('/roles/:id', async (req, res) => {
    const roleId = req.params.id;

    try {
        await Role.findByIdAndDelete(roleId);
        res.status(200).json({ message: 'Role deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



//View all records
router.get('/products/all-records', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Add products
router.post('/products', async (req, res) => {
    const productData = req.body;

    try {
        const newProduct = await Product.create(productData);
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// GET /products/:id
router.get('/products/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId)
            .populate('unit category brand warranty')
            .exec();

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// PUT /products/:id
router.put('/products/:id', async (req, res) => {
    const productId = req.params.id;
    const productData = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, productData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /products/:id
router.delete('/products/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//View all records
router.get('/units/all-records', async (req, res) => {
    try {
        const units = await Unit.find();
        res.status(200).json(units);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// POST /units
router.post('/units', async (req, res) => {
    const unitData = req.body;

    try {
        const newUnit = await Unit.create(unitData);
        res.status(201).json({ message: 'Unit added successfully', unit: newUnit });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /units/:id
router.put('/units/:id', async (req, res) => {
    const unitId = req.params.id;
    const unitData = req.body;

    try {
        await Unit.findByIdAndUpdate(unitId, unitData);
        res.status(200).json({ message: 'Unit updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /units/:id
router.delete('/units/:id', async (req, res) => {
    const unitId = req.params.id;

    try {
        await Unit.findByIdAndDelete(unitId);
        res.status(200).json({ message: 'Unit deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});




//View all records
router.get('/categories/all-records', async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// POST /categories
router.post('/categories', async (req, res) => {
    const categoryData = req.body;

    try {
        const newCategory = await Category.create(categoryData);
        res.status(201).json({ message: 'Category added successfully', category: newCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /categories/:id
router.put('/categories/:id', async (req, res) => {
    const categoryId = req.params.id;
    const categoryData = req.body;

    try {
        await Category.findByIdAndUpdate(categoryId, categoryData);
        res.status(200).json({ message: 'Category updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /categories/:id
router.delete('/categories/:id', async (req, res) => {
    const categoryId = req.params.id;

    try {
        await Category.findByIdAndDelete(categoryId);
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



//View all records
router.get('/brands/all-records', async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// POST /brands
router.post('/brands', async (req, res) => {
    const brandData = req.body;

    try {
        const newBrand = await Brand.create(brandData);
        res.status(201).json({ message: 'Brand added successfully', brand: newBrand });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/brands/:id', async (req, res) => {
    const brandId = req.params.id;
    const brandData = req.body;

    try {
        await Brand.findByIdAndUpdate(brandId, brandData);
        res.status(200).json({ message: 'Brand updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /brands/:id
router.delete('/brands/:id', async (req, res) => {
    const brandId = req.params.id;

    try {
        await Brand.findByIdAndDelete(brandId);
        res.status(200).json({ message: 'Brand deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



//View all records
router.get('/variations/all-records', async (req, res) => {
    try {
        const variations = await Variation.find();
        res.status(200).json(variations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// POST /variations
router.post('/variations', async (req, res) => {
    const variationData = req.body;

    try {
        const newVariation = await Variation.create(variationData);
        res.status(201).json({ message: 'Variation added successfully', variation: newVariation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /variations/:id
router.put('/variations/:id', async (req, res) => {
    const variationId = req.params.id;
    const variationData = req.body;

    try {
        await Variation.findByIdAndUpdate(variationId, variationData);
        res.status(200).json({ message: 'Variation updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /variations/:id
router.delete('/variations/:id', async (req, res) => {
    const variationId = req.params.id;

    try {
        await Variation.findByIdAndDelete(variationId);
        res.status(200).json({ message: 'Variation deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



//View all records
router.get('/warranties/all-records', async (req, res) => {
    try {
        const warranties = await Warranty.find();
        res.status(200).json(warranties);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// POST /warranties
router.post('/warranties', async (req, res) => {
    const warrantyData = req.body;

    try {
        const newWarranty = await Warranty.create(warrantyData);
        res.status(201).json({ message: 'Warranty added successfully', warranty: newWarranty });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /warranties/:id
router.put('/warranties/:id', async (req, res) => {
    const warrantyId = req.params.id;
    const warrantyData = req.body;

    try {
        await Warranty.findByIdAndUpdate(warrantyId, warrantyData);
        res.status(200).json({ message: 'Warranty updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /warranties/:id
router.delete('/warranties/:id', async (req, res) => {
    const warrantyId = req.params.id;

    try {
        await Warranty.findByIdAndDelete(warrantyId);
        res.status(200).json({ message: 'Warranty deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});





//View all records
router.get('/sales/all-records', async (req, res) => {
    try {
        const sales = await Sale.find();
        res.status(200).json(sales);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// POST /sales
router.post('/sales', async (req, res) => {
    const saleData = req.body;

    try {
        const newSale = await Sale.create(saleData);
        res.status(201).json({ message: 'Sale added successfully', sale: newSale });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /sales/:id
router.get('/sales/:id', async (req, res) => {
    const saleId = req.params.id;

    try {
        const sale = await Sale.findById(saleId);

        if (!sale) {
            return res.status(404).json({ message: 'Sale not found' });
        }

        res.status(200).json(sale);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /sales/:id
router.put('/sales/:id', async (req, res) => {
    const saleId = req.params.id;
    const saleData = req.body;

    try {
        const updatedSale = await Sale.findByIdAndUpdate(saleId, saleData, { new: true });

        if (!updatedSale) {
            return res.status(404).json({ message: 'Sale not found' });
        }

        res.status(200).json({ message: 'Sale updated successfully', sale: updatedSale });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /sales/:id
router.delete('/sales/:id', async (req, res) => {
    const saleId = req.params.id;

    try {
        const deletedSale = await Sale.findByIdAndDelete(saleId);

        if (!deletedSale) {
            return res.status(404).json({ message: 'Sale not found' });
        }

        res.status(200).json({ message: 'Sale deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});




//View all records
router.get('/drafts/all-records', async (req, res) => {
    try {
        const drafts = await Draft.find();
        res.status(200).json(drafts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// POST /drafts
router.post('/drafts', async (req, res) => {
    const draftData = req.body;

    try {
        const newDraft = await Draft.create(draftData);
        res.status(201).json({ message: 'Draft added successfully', draft: newDraft });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /drafts/:id
router.get('/drafts/:id', async (req, res) => {
    const draftId = req.params.id;

    try {
        const draft = await Draft.findById(draftId);

        if (!draft) {
            return res.status(404).json({ message: 'Draft not found' });
        }

        res.status(200).json(draft);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /drafts/:id
router.put('/drafts/:id', async (req, res) => {
    const draftId = req.params.id;
    const draftData = req.body;

    try {
        const updatedDraft = await Draft.findByIdAndUpdate(draftId, draftData, { new: true });

        if (!updatedDraft) {
            return res.status(404).json({ message: 'Draft not found' });
        }

        res.status(200).json({ message: 'Draft updated successfully', draft: updatedDraft });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /drafts/:id
router.delete('/drafts/:id', async (req, res) => {
    const draftId = req.params.id;

    try {
        const deletedDraft = await Draft.findByIdAndDelete(draftId);

        if (!deletedDraft) {
            return res.status(404).json({ message: 'Draft not found' });
        }

        res.status(200).json({ message: 'Draft deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});




//View all records
router.get('/quotations/all-records', async (req, res) => {
    try {
        const quotations = await Quotation.find();
        res.status(200).json(quotations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.post('/quotations', async (req, res) => {
    const quotationData = req.body;

    try {
        const newQuotation = await Quotation.create(quotationData);
        res.status(201).json({ message: 'Quotation added successfully', quotation: newQuotation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /quotations/:id
router.get('/quotations/:id', async (req, res) => {
    const quotationId = req.params.id;

    try {
        const quotation = await Quotation.findById(quotationId);

        if (!quotation) {
            return res.status(404).json({ message: 'Quotation not found' });
        }

        res.status(200).json(quotation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /quotations/:id
router.put('/quotations/:id', async (req, res) => {
    const quotationId = req.params.id;
    const quotationData = req.body;

    try {
        const updatedQuotation = await Quotation.findByIdAndUpdate(quotationId, quotationData, { new: true });

        if (!updatedQuotation) {
            return res.status(404).json({ message: 'Quotation not found' });
        }

        res.status(200).json({ message: 'Quotation updated successfully', quotation: updatedQuotation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /quotations/:id
router.delete('/quotations/:id', async (req, res) => {
    const quotationId = req.params.id;

    try {
        const deletedQuotation = await Quotation.findByIdAndDelete(quotationId);

        if (!deletedQuotation) {
            return res.status(404).json({ message: 'Quotation not found' });
        }

        res.status(200).json({ message: 'Quotation deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



// POST /discounts
router.post('/discounts', async (req, res) => {
    const discountData = req.body;

    try {
        const newDiscount = await Discount.create(discountData);
        res.status(201).json({ message: 'Discount added successfully', discount: newDiscount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /discounts/:id
router.put('/discounts/:id', async (req, res) => {
    const discountId = req.params.id;
    const discountData = req.body;

    try {
        const updatedDiscount = await Discount.findByIdAndUpdate(discountId, discountData, { new: true });

        if (!updatedDiscount) {
            return res.status(404).json({ message: 'Discount not found' });
        }

        res.status(200).json({ message: 'Discount updated successfully', discount: updatedDiscount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// DELETE /discounts/:id
router.delete('/discounts/:id', async (req, res) => {
    const discountId = req.params.id;

    try {
        const deletedDiscount = await Discount.findByIdAndDelete(discountId);

        if (!deletedDiscount) {
            return res.status(404).json({ message: 'Discount not found' });
        }

        res.status(200).json({ message: 'Discount deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// GET /discounts/:id
router.get('/discounts/:id', async (req, res) => {
    const discountId = req.params.id;

    try {
        const discount = await Discount.findById(discountId);

        if (!discount) {
            return res.status(404).json({ message: 'Discount not found' });
        }

        res.status(200).json(discount);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// View all records
router.get('/discounts', async (req, res) => {
    try {
        const discounts = await Discount.find();
        res.status(200).json(discounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /shipments/:status
router.get('/shipments/:status', async (req, res) => {
    const shipmentStatus = req.params.status;
    // if (!shipmentStatus || shipmentStatus.trim() === '') {
    //     return res.status(400).json({ message: 'Please provide a valid shipment status' });
    //   }

    try {
        const shipments = await Sale.find({ shipmentStatus: shipmentStatus });
        res.status(200).json(shipments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST /stock-transfers
router.post('/stock-transfers', async (req, res) => {
    const transferData = req.body;

    try {
        const newTransfer = await StockTransfer.create(transferData);
        res.status(201).json({ message: 'Stock transfer added successfully', transfer: newTransfer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /stock-transfers/:id
router.put('/stock-transfers/:id', async (req, res) => {
    const transferId = req.params.id;
    const transferData = req.body;

    try {
        const updatedTransfer = await StockTransfer.findByIdAndUpdate(transferId, transferData, { new: true });

        if (!updatedTransfer) {
            return res.status(404).json({ message: 'Stock transfer not found' });
        }

        res.status(200).json({ message: 'Stock transfer updated successfully', transfer: updatedTransfer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /stock-transfers/:id
router.delete('/stock-transfers/:id', async (req, res) => {
    const transferId = req.params.id;

    try {
        const deletedTransfer = await StockTransfer.findByIdAndDelete(transferId);

        if (!deletedTransfer) {
            return res.status(404).json({ message: 'Stock transfer not found' });
        }

        res.status(200).json({ message: 'Stock transfer deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /stock-transfers/:id
router.get('/stock-transfers/:id', async (req, res) => {
    const transferId = req.params.id;

    try {
        const transfer = await StockTransfer.findById(transferId);

        if (!transfer) {
            return res.status(404).json({ message: 'Stock transfer not found' });
        }

        res.status(200).json(transfer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// View all records
router.get('/stock-transfers', async (req, res) => {
    try {
        const transfers = await StockTransfer.find();
        res.status(200).json(transfers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// POST /stock-adjustment
router.post('/stock-adjustment', async (req, res) => {
    const adjustmentData = req.body;

    try {
        const newAdjustment = await StockAdjustment.create(adjustmentData);
        res.status(201).json({ message: 'Stock transfer added successfully', adjustment: newAdjustment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT /stock-adjustment/:id
router.put('/stock-adjustment/:id', async (req, res) => {
    const adjustmentId = req.params.id;
    const adjustmentData = req.body;

    try {
        const updatedAdjustment = await StockAdjustment.findByIdAndUpdate(adjustmentId, adjustmentData, { new: true });

        if (!updatedTransfer) {
            return res.status(404).json({ message: 'Stock transfer not found' });
        }

        res.status(200).json({ message: 'Stock transfer updated successfully', adjustment: updatedAdjustment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE /stock-adjustment/:id
router.delete('/stock-adjustment/:id', async (req, res) => {
    const adjustmentId = req.params.id;

    try {
        const deletedAdjustment = await StockAdjustment.findByIdAndDelete(adjustmentId);

        if (!deletedAdjustment) {
            return res.status(404).json({ message: 'Stock transfer not found' });
        }

        res.status(200).json({ message: 'Stock transfer deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /stock-adjustment/:id
router.get('/stock-adjustment/:id', async (req, res) => {
    const adjustmentId = req.params.id;

    try {
        const adjustment = await StockAdjustment.findById(adjustmentId);

        if (!adjustment) {
            return res.status(404).json({ message: 'Stock transfer not found' });
        }

        res.status(200).json(adjustment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// View all records
router.get('/stock-adjustment', async (req, res) => {
    try {
        const adjustments = await StockAdjustment.find();
        res.status(200).json(adjustments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// POST /add-expenses
router.post('/add-expenses', async (req, res) => {
    const expenseData = req.body;

    try {
        const newExpense = await Expense.create(expenseData);
        res.status(201).json({ message: 'Expense added successfully', expense: newExpense });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// PUT /add-expenses/:id
router.put('/add-expenses/:id', async (req, res) => {
    const expenseId = req.params.id;
    const expenseData = req.body;

    try {
        const updatedExpense = await Expense.findByIdAndUpdate(expenseId, expenseData, { new: true });

        if (!updatedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.status(200).json({ message: 'Expense updated successfully', expense: updatedExpense });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// DELETE /add-expenses/:id
router.delete('/add-expenses/:id', async (req, res) => {
    const expenseId = req.params.id;

    try {
        const deletedExpense = await Expense.findByIdAndDelete(expenseId);

        if (!deletedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// GET /add-expenses/:id
router.get('/add-expenses/:id', async (req, res) => {
    const expenseId = req.params.id;

    try {
        const expense = await Expense.findById(expenseId);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.status(200).json(expense);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


//View all record
router.get('/add-expenses', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// POST /expense-categories
router.post('/expense-categories', async (req, res) => {
    const categoryData = req.body;

    try {
        const newCategory = await ExpenseCategory.create(categoryData);
        res.status(201).json({ message: 'Expense category added successfully', category: newCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// PUT /expense-categories/:id
router.put('/expense-categories/:id', async (req, res) => {
    const categoryId = req.params.id;
    const categoryData = req.body;

    try {
        const updatedCategory = await ExpenseCategory.findByIdAndUpdate(categoryId, categoryData, { new: true });

        if (!updatedCategory) {
            return res.status(404).json({ message: 'Expense category not found' });
        }

        res.status(200).json({ message: 'Expense category updated successfully', category: updatedCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// DELETE /expense-categories/:id
router.delete('/expense-categories/:id', async (req, res) => {
    const categoryId = req.params.id;

    try {
        const deletedCategory = await ExpenseCategory.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ message: 'Expense category not found' });
        }

        res.status(200).json({ message: 'Expense category deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


//View all record
router.get('/expense-categories', async (req, res) => {
    try {
        const categories = await ExpenseCategory.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



// POST /add-accounts
router.post('/add-accounts', async (req, res) => {
    const accountData = req.body;
  
    try {
      const newAccount = await Account.create(accountData);
      res.status(201).json({ message: 'Account added successfully', account: newAccount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


  // PUT /add-accounts/:id
router.put('/add-accounts/:id', async (req, res) => {
    const accountId = req.params.id;
    const accountData = req.body;
  
    try {
      const updatedAccount = await Account.findByIdAndUpdate(accountId, accountData, { new: true });
  
      if (!updatedAccount) {
        return res.status(404).json({ message: 'Account not found' });
      }
  
      res.status(200).json({ message: 'Account updated successfully', account: updatedAccount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


  // DELETE /add-accounts/:id
router.delete('/add-accounts/:id', async (req, res) => {
    const accountId = req.params.id;
  
    try {
      const deletedAccount = await Account.findByIdAndDelete(accountId);
  
      if (!deletedAccount) {
        return res.status(404).json({ message: 'Account not found' });
      }
  
      res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


  // GET /add-accounts/:id
router.get('/add-accounts/:id', async (req, res) => {
    const accountId = req.params.id;
  
    try {
      const account = await Account.findById(accountId);
  
      if (!account) {
        return res.status(404).json({ message: 'Account not found' });
      }
  
      res.status(200).json(account);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  
  // GET /add-accounts
router.get('/add-accounts', async (req, res) => {
    try {
      const accounts = await Account.find();
      res.status(200).json(accounts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // POST /funds-transfer   
router.post('/funds-transfer', async (req, res) => {
    const transferData = req.body;
  
    try {
        const newTransfer = await FundTransfer.create(transferData);

      // 1. Validate request data
      if (!transferData.transferFrom || !transferData.transferTo || !transferData.amount || !transferData.date) {
        return res.status(400).json({ message: 'Invalid request data' });
      }
  
      // 2. Fetch source and target accounts from the database
      const sourceAccount = await Account.findById(transferData.transferFrom);
      const targetAccount = await Account.findById(transferData.transferTo);
  
      // Check if both accounts exist
      if (!sourceAccount || !targetAccount) {
        return res.status(404).json({ message: 'Source or target account not found' });
      }
  
      // Check if the source account has sufficient balance
      if (sourceAccount.openingBalance < transferData.amount) {
        return res.status(400).json({ message: 'Insufficient balance in the source account' });
      }
  
      // 3. Deduct the amount from the source account
      sourceAccount.openingBalance -= transferData.amount;
      await sourceAccount.save();
  
      // 4. Add the amount to the target account
      targetAccount.openingBalance += transferData.amount;
      await targetAccount.save();
  
      // 5. Create a transaction record or log (You may want to implement this part)
  
      res.status(200).json({ message: 'Funds transferred successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });



  // POST /funds-deposit 
  router.post('/funds-deposit', async (req, res) => {
    const depositData = req.body;
  
    try {
        const newDeposit = await FundDeposit.create(depositData);

      // 1. Validate request data
      if (!depositData.transferFrom || !depositData.transferTo || !depositData.amount || !depositData.date) {
        return res.status(400).json({ message: 'Invalid request data' });
      }
  
      // 2. Fetch source and target accounts from the database
      const sourceAccount = await Account.findById(depositData.depositFrom);
      const targetAccount = await Account.findById(depositData.depositTo);
  
      // Check if both accounts exist
      if (!sourceAccount || !targetAccount) {
        return res.status(404).json({ message: 'Source or target account not found' });
      }
  
      // Check if the source account has sufficient balance
      if (sourceAccount.openingBalance < depositData.amount) {
        return res.status(400).json({ message: 'Insufficient balance in the source account' });
      }
  
      // 3. Deduct the amount from the source account
      sourceAccount.openingBalance -= depositData.amount;
      await sourceAccount.save();
  
      // 4. Add the amount to the target account
      targetAccount.openingBalance += depositData.amount;
      await targetAccount.save();
  
      // 5. Create a transaction record or log (You may want to implement this part)
  
      res.status(200).json({ message: 'Funds deposited successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


// Calculate Supplier Due for Payment Account>Balance sheet
async function calculateSupplierDue() {
    try {
      // Aggregate totalPurchaseDue and totalPurchaseReturnDue for all suppliers
      const supplierData = await Supplier.aggregate([
        {
          $group: {
            _id: null,
            totalPurchaseDue: { $sum: '$totalPurchaseDue' },
            totalPurchaseReturnDue: { $sum: '$totalPurchaseReturnDue' },
          },
        },
      ]);
  
      if (supplierData.length === 0) {
        return 0; // No suppliers found, Supplier Due is zero
      }
  
      // Calculate the net Supplier Due
      const netSupplierDue = supplierData[0].totalPurchaseDue - supplierData[0].totalPurchaseReturnDue;
  
      return netSupplierDue;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

// Calculate Customer Due for Payment Account>Balance sheet
async function calculateCustomerDue() {
    try {
      // Aggregate totalSalesDue and totalSalesReturnDue for all customers
      const customerData = await Customer.aggregate([
        {
          $group: {
            _id: null,
            totalSalesDue: { $sum: '$totalSalesDue' },
            totalSalesReturnDue: { $sum: '$totalSalesReturnDue' },
          },
        },
      ]);
  
      if (customerData.length === 0) {
        return 0; // No customers found, Customer Due is zero
      }
  
      // Calculate the net Customer Due
      const netCustomerDue = customerData[0].totalSalesDue - customerData[0].totalSalesReturnDue;
  
      return netCustomerDue;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
// GET /balance-sheet
router.get('/balance-sheet', async (req, res) => {
    try {
      const supplierDue = await calculateSupplierDue();
      const customerDue = await calculateCustomerDue();
      const accounts = await Account.find();
      const name = accounts.name;
      const balance = accounts.openingBalance;

      // Calculate the balance sheet based on supplierDue and customerDue
      const balanceSheet = {
        supplierDue,
        customerDue,
        //Closing stock
        name,
        balance
      };
  
      res.status(200).json(balanceSheet);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// GET /trial-stock    (Only diff is in trial balance closing stock is not prenet and only totalPurchaseDue is used instead of totalPurchaseDue-totalPurchasereturnDue )
router.get('/trial-stock', async (req, res) => {
    try {
      const supplierDue = await calculateSupplierDue();
      const customerDue = await calculateCustomerDue();
      const accounts = await Account.find();
      const name = accounts.name;
      const balance = accounts.openingBalance;

      // Calculate the balance sheet based on supplierDue and customerDue
      const balanceSheet = {
        supplierDue,
        customerDue,
        //Closing stock
        name,
        balance
      };
  
      res.status(200).json(balanceSheet);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


// GET /cash-flow
router.get('/cash-flow', async (req, res) => {
    try {
      // Fetch data from Purchase, Sale, and Expense schemas where Payment Account is not empty
      const purchaseData = await Purchase.find({ paymentAccount: { $ne: null } });
      const saleData = await Sale.find({ paymentAccount: { $ne: null } });
      const expenseData = await Expense.find({ paymentAccount: { $ne: null } });  ////$exists: true
  
      // Fetch all records from FundTransfer and FundDeposit schemas
      const fundTransferData = await FundTransfer.find();
      const fundDepositData = await FundDeposit.find();
  
      // Combine and format the data as needed
      const cashFlowData = {
        purchases: purchaseData,
        sales: saleData,
        expenses: expenseData,
        fundTransfers: fundTransferData,
        fundDeposits: fundDepositData,
      };
  
      // Return the cash flow data
      res.status(200).json(cashFlowData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });




  // GET /payment-account-report
router.get('/payment-account-report', async (req, res) => {
    try {
      // Fetch transaction data from Purchase, Sale, and Expense schemas
      const purchaseTransactions = await Purchase.find({ paymentMethod: { $ne: null } });
      const saleTransactions = await Sale.find({ paymentMethod: { $ne: null } });
      const expenseTransactions = await Expense.find({ paymentMethod: { $ne: null } });
  
      // Combine and format the transaction data as needed
      const paymentAccountReportData = {
        purchases: purchaseTransactions,
        sales: saleTransactions,
        expenses: expenseTransactions,
      };
  
      // Return the payment account report data
      res.status(200).json(paymentAccountReportData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });




  // GET /kitchen - Fetch orders that need to be prepared
router.get('/kitchen', async (req, res) => {
    try {
      // Fetch pending orders from the Sale collection
      const kitchenOrders = await Sale.find({ orderStatus: 'Received' });
  
      res.status(200).json(kitchenOrders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // POST /mark-as-cooked - Mark an order as cooked
  router.post('/kitchen/mark-as-cooked', async (req, res) => {
    try {
      const orderId = req.body.orderId; // Assuming you send the orderId in the request body
  
      // Update the status of the order to indicate it's cooked
      await Sale.findByIdAndUpdate(orderId, { orderStatus: 'Cooked' });
  
      res.status(200).json({ message: 'Order marked as cooked' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });



module.exports = router;
