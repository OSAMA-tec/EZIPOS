const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://hashmi:hashmi@cluster0.xqetqbr.mongodb.net/')
    .then(() => {
        console.log("Connection is successful");
    }).catch((e) =>{
        console.log("No Connection");
    })