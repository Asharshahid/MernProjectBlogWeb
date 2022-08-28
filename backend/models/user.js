const mongoose = require("mongoose");
const jwt =require("jsonwebtoken");


const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        uniqe:true,
        min:3
    },
    email:{
        type:String,
        required:true,
        uniqe:true
    },
    password:{
        type:String,
        required:true,
        min:5
    },
    profilePic:{
        type:String,
        default:""
    },

},{timestamps:true}

);

userSchema.methods.generateAuthToken = function(){
    try{
        const token = jwt.sign({_id:this._id.toString()}, 'asharasharashar');
        return token;
    }
    catch(err){
        console.log(err);
    }
}


module.exports = mongoose.model("user", userSchema) 

