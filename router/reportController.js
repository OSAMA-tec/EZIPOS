const express = require('express');
const router = express.Router();
const {profitGet} = require('../controllers/Report/Profit/allProfit');
const {profitbyType} = require('../controllers/Report/Profit/typeProfit');
const {purchaseSale} = require('../controllers/Report/Purchase/purchaseSale');
const {stockReport} = require('../controllers/Report/Stock/getAllStock');
const {StockAdjustment} = require('../controllers/Report/Stock/stockAdjustment');
const {itemsReport} = require('../controllers/Report/Item/items');
const {productPurchase} = require('../controllers/Report/Product/product');
const {productSale} = require('../controllers/Report/Product/productSale');
const {generateReport} = require('../controllers/Report/Purchase/purchasePayment');
const {getLotReport} = require('../controllers/Report/Lot/lot');
const {getSellPaymentReport} = require('../controllers/Report/Sell/sellPayment');
const {registerReport} = require('../controllers/Report/Register/registerReport');
const {getSalesReport} = require('../controllers/Report/Sales/saleRes');

// const authMiddleware = require('../../middleware/authMiddleware');

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


//Purchase
router.get('/purchase-payment', generateReport);



//Lot
router.get('/lot', getLotReport);


//Sell
router.get('/sell-payment', getSellPaymentReport);



//Register
router.get('/register-report', registerReport);



//Sale Res
router.get('/sale-representative', getSalesReport);



module.exports = router;
