const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://osama:osama@cluster0.esdwjz0.mongodb.net/')
    .then(() => {
        console.log("Connection is successful");
    }).catch((e) =>{
        console.log("No Connection");
    })