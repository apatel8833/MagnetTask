const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    file:{
        type:String,
    },
    image:{
        type:String
    }
});

module.exports = mongoose.model("user",userSchema);