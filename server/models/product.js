const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    file :{
        type:String,
    },

})

module.exports = mongoose.model("product",productSchema);