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
const draftsRoutes = require('./router/draftsRoutes');
const quotationsRoutes = require('./router/quotationsRoutes');
const discountsRoutes = require('./router/discountsRoutes');

const stockTransferRoutes = require('./router/stockTransferRoutes');
const stockAdjustmentRoutes = require('./router/stockAdjustmentRoutes');
const expenseRoutes = require('./router/expenseRoutes');
const expenseCategoryRoutes = require('./router/expenseCategoryRoutes');
const accountRoutes = require('./router/accountRoutes');

// const financialRoutes = require('./router/financialRoutes');
const kitchenRoutes = require('./router/kitchenRoutes');

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
app.use('/admin/units', unitsRoutes);
app.use('/admin/categories', categoriesRoutes);
app.use('/admin/brands', brandsRoutes);
app.use('/admin/variations', variationsRoutes);
app.use('/admin/warranties', warrantiesRoutes);
app.use('/admin/sales', salesRoutes);
app.use('/admin/drafts', draftsRoutes);
app.use('/admin/quotations', quotationsRoutes);
app.use('/admin/discounts', discountsRoutes);
app.use('/admin/stock-transfers', stockTransferRoutes);

app.use('/admin/stock-adjustment', stockAdjustmentRoutes);
app.use('/admin/add-expenses', expenseRoutes);
app.use('/admin/expense-categories', expenseCategoryRoutes);
app.use('/admin/add-accounts', accountRoutes);

// app.use('/finance', financialRoutes);
app.use('/admin/kitchen', kitchenRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
