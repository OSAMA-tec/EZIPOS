const express = require('express');
// const mongoose = require('mongoose');
require("./db/connection")
// require("./uploads")
const cors = require('cors');
const app = express();
// console.log(app.use('/uploads',express.static('./uploads')));
// const userRoutes= require('./router/userRoutes')
const adminRoutes= require('./router/adminRoutes')
// const uploads = require('./router/uploads')
const bodyParser = require('body-parser')

// var cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
// app.use('/uploads', express.static('uploads'));
// app.use('/', uploads);
app.use(bodyParser.json());

// app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

// app.use(cookieParser())


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
