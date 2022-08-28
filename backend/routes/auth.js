const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require ('bcrypt');
const jwt = require("jsonwebtoken");
const cookieParser =require("cookie-parser");

router.use(cookieParser());



router.post("/register" , async(req, res)=>{

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password , salt);

        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPass
        });
        const user = await newUser.save();
        // res.status(200).send(newUser);
        if(user){
            res.send(user)
        }
    }
    catch(error){
        res.status(500).json(error)
    }
})

// LOGIN ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

router.post("/login" , async(req, res)=>{

    try{
        const {email,password}= req.body;
        const matched = await User.findOne({email});
        const passC = await bcrypt.compare(password, matched.password);

        if(passC){
            const token = await matched.generateAuthToken();
            res.cookie("jwt",token,{
                // expires:new Date(Date.now()+5000),
                httpOnly:true
            })

            res.json(matched)
        }
        else{
            console.log("Invalid password")
        }
    }
    catch(error){
        res.status(500).json(error)
    }
})


//  LOGOUT OR REMOVE TOKEN

router.get("/logout" , (req, res)=>{
    try{
        const token = res.clearCookie("jwt");
        res.status(200).json("Yes token delete")
    }
    catch(err){
        res.status(404).send(err)
    }
})

module.exports = router;