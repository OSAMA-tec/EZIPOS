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
const {getTaxReport} = require('../controllers/Report/Tax/taxReport');
const {checkPermission} = require('../middleware/checkPermission'); 

// Routes for profit 
router.get('/profit', checkPermission('viewProfit'), profitGet);
router.get('/profit/category', checkPermission('viewProfit'), profitbyType);

//Routes for Purchase Sale
router.get('/purchase/:range', checkPermission('viewPurchaseSale'), purchaseSale);

//ALL STOCKS REPORT
router.get('/stock', checkPermission('viewStockReport'), stockReport);
router.get('/stockadjustment', checkPermission('viewStockAdjustment'), StockAdjustment);

//Items Report
router.get('/items', checkPermission('viewItemsReport'), itemsReport);

//Product report
router.get('/product-purchase', checkPermission('viewProductPurchase'), productPurchase);
router.get('/product-sale', checkPermission('viewProductSale'), productSale);

//Purchase
router.get('/purchase-payment', checkPermission('viewPurchasePayment'), generateReport);

//Lot
router.get('/lot', checkPermission('viewLotReport'), getLotReport);

//Sell
router.get('/sell-payment', checkPermission('viewSellPaymentReport'), getSellPaymentReport);

//Register
router.get('/register-report', checkPermission('viewRegisterReport'), registerReport);

//Sale Representative
router.get('/sale-representative', checkPermission('viewSalesReport'), getSalesReport);

//Tax Report
router.get('/tax-report', checkPermission('viewTaxReport'), getTaxReport);

module.exports = router;