const express = require('express');
const router = express.Router();
const {profitGet} = require('../controllers/Report/Profit/allProfit');
const {profitbyType} = require('../controllers/Report/Profit/typeProfit');
const {purchaseSale} = require('../controllers/Report/PurchaseSale/purchaseSale');
const {stockReport} = require('../controllers/Report/Stock/getAllStock');
const {StockAdjustment} = require('../controllers/Report/Stock/stockAdjustment');
const {itemsReport} = require('../controllers/Report/Item/items');
const {productPurchase} = require('../controllers/Report/Product/product');
const {productSale} = require('../controllers/Report/Product/productSale');

const authMiddleware = require('../../middleware/authMiddleware');

// Routes for profit 
router.get('/profit', profitGet);
router.get('/profit/category', profitbyType);

//Routes for Purchase Sale
router.get('/purchase/:range', purchaseSale);


//ALL STOCKS REPORT
router.get('/stock', stockReport);
router.get('/stockadjustment', StockAdjustment);


//Items Report
router.get('/items',itemsReport);


//Product report
router.get('/product-purchase', productPurchase);// done
router.get('/product-sale',productSale);         // done


module.exports = router;
