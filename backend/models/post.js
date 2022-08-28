const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    username:{
        type:String,
        ref: "user"
    },
    title:{
        type:String,
        required:true,
        uniqe:true
    },
    desc:{
        type:String,
        required:true,
        uniqe:true
    },
    photo:{
        type:String,
        required:false
    },
    categories:{
        type: Array,
        required:false
    },

},{timestamps:true}

);

module.exports = mongoose.model("post", postSchema) 

