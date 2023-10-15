const express = require('express');
// const mongoose = require('mongoose');
require("./db/connection")
// require("./uploads")
const cors = require('cors');
const app = express();
// console.log(app.use('/uploads',express.static('./uploads')));
// const userRoutes= require('./router/userRoutes')
// const adminRoutes= require('./router/adminRoutes')
// const uploads = require('./router/uploads')
const bodyParser = require('body-parser')

// var cookieParser = require('cookie-parser')


const authRoutes = require('./router/authRoutes');
const usersRoutes = require('./router/usersRoutes');
const rolesRoutes = require('./router/rolesRoutes');
const productsRoutes = require('./router/productsRoutes');
const unitsRoutes = require('./router/unitsRoutes');
const categoriesRoutes = require('./router/categoriesRoutes');
const brandsRoutes = require('./router/brandsRoutes');
const variationsRoutes = require('./router/variationsRoutes');
const warrantiesRoutes = require('./router/warrantiesRoutes');
const salesRoutes = require('./router/salesRoutes');
const posRoutes = require('./router/posRoutes');

const draftsRoutes = require('./router/draftsRoutes');
const quotationsRoutes = require('./router/quotationsRoutes');
const discountsRoutes = require('./router/discountsRoutes');
const sellingPriceGroupRoutes = require('./router/sellingPriceGroupRoutes');

const stockTransferRoutes = require('./router/stockTransferRoutes');
const stockAdjustmentRoutes = require('./router/stockAdjustmentRoutes');
const expenseRoutes = require('./router/expenseRoutes');
const expenseCategoryRoutes = require('./router/expenseCategoryRoutes');
const accountRoutes = require('./router/accountRoutes');
const businessLocationRoutes = require('./router/businessLocationRoutes');
// My routes
const contact_routes= require("./router/Contact")
const group_routes=require("./router/Customergroup")
const purchase_routes=require("./router/PurchaseOrder")
const purchase_due=require("./router/AddPurchases")
const purchase_return=require("./router/PurchaseReturn")
const recipe_s=require("./router/Recipe")
const production_m=require("./router/Production")
// const financialRoutes = require('./router/financialRoutes');
// const kitchenRoutes = require('./router/kitchenRoutes');
const invoiceRoutes = require('./router/invoiceRoutes');
const reportRoute = require('./router/reportController');

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
// app.use('/uploads', express.static('uploads'));
// app.use('/', uploads);
app.use(bodyParser.json());

// app.use('/user', userRoutes);
// app.use('/admin', adminRoutes);

// app.use(cookieParser())

// Use the routes
app.use('/admin/auth', authRoutes);
app.use('/admin/users', usersRoutes);
app.use('/admin/roles', rolesRoutes);
app.use('/admin/products', productsRoutes);
app.use('/admin/selling-price-groups', sellingPriceGroupRoutes);

app.use('/admin/units', unitsRoutes);
app.use('/admin/categories', categoriesRoutes);
app.use('/admin/brands', brandsRoutes);
app.use('/admin/variations', variationsRoutes);
app.use('/admin/warranties', warrantiesRoutes);
app.use('/admin/sales', salesRoutes);
app.use('/admin/pos', posRoutes);

app.use('/admin/drafts', draftsRoutes);
app.use('/admin/quotations', quotationsRoutes);
app.use('/admin/discounts', discountsRoutes);
app.use('/admin/stock-transfers', stockTransferRoutes);

app.use('/admin/stock-adjustment', stockAdjustmentRoutes);
app.use('/admin/add-expenses', expenseRoutes);
app.use('/admin/expense-categories', expenseCategoryRoutes);
app.use('/admin/add-accounts', accountRoutes);
app.use('/admin/invoices', invoiceRoutes);

// MY routes
app.use("/admin", contact_routes);
app.use("/admin",group_routes);
app.use("/admin",purchase_routes);
app.use("/admin",purchase_due);
app.use("/admin",purchase_return);
app.use("/admin",recipe_s);
app.use("/admin",production_m);
// app.use('/finance', financialRoutes);
// app.use('/admin/kitchen', kitchenRoutes);


app.use('/admin/business-locations', businessLocationRoutes);



app.use('/admin/reports', reportRoute);







app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
