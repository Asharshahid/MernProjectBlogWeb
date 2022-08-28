const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    
    username:{
        type:String,
        required:true
    },

},{timestamps:true}

);

module.exports = mongoose.model("category", categorySchema) 

