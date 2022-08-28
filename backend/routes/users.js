const router = require("express").Router();
const User = require("../models/user");
const Post = require("../models/post");
const middleware = require("../middleware/middleware")
const jwt =require("jsonwebtoken");
const bcrypt = require("bcrypt")


// UPDATE USER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

router.put("/update/:id",middleware, async(req, res)=>{
    
        try{
            const token = req.header("jwt") || req.cookies.jwt;
            const verify = jwt.verify(token, "asharasharashar");
            if(verify._id === req.params.id){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password , salt);
                const updateUser = await User.findByIdAndUpdate(verify._id,{$set :req.body},{new:true});
                res.json(updateUser);
            }else{
                res.status(500).json("You can update only your account")
            }
        }
        catch(error){
            res.status(500).json(`this is error :  ${error}`)
        }
      
})


// DELETE USER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// router.delete("/delete/:id",middleware, async(req, res)=>{
    

//     try{
//         const token = req.header("jwt") || req.cookies.jwt;
//         const verify = jwt.verify(token, "asharasharashar");
//         if(verify._id === req.params.id){
//             const deleteUser = await User.findByIdAndDelete(verify._id);
//             res.json(deleteUser);
//         }else{
//             res.status(500).json("You can delete only your account")
//         }
//     }catch(error){
//         res.status(500).json(error)
//     }
// })


// DELETE USER & ALL POST ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

router.delete("/delete",middleware, async(req, res)=>{
    

    try{
        const token = req.header("jwt") || req.cookies.jwt;
        const verify = jwt.verify(token, "asharasharashar");
        if(verify){
            const deleteUser = await User.findByIdAndDelete(verify._id);
            const allPost = await Post.find({userId:verify._id});
            if(allPost){
               const allPost = await Post.deleteMany({userId:verify._id});
               res.json(deleteUser + allPost);
            }
        }else{
            res.status(500).json("You can delete only your account")
        }
    }catch(error){
        res.status(500).json(error)
    }
})


// GET USER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

router.get("/get/:id", middleware, async(req, res)=>{
    

    try{
        const token = req.header("jwt") || req.cookies.jwt;
        const verify = jwt.verify(token, "asharasharashar");
        if(verify._id === req.params.id){
            const getUser = await User.findById(verify._id);
            res.json(getUser);
        }else{
            res.status(500).json("You can only your account")
        }
    }catch(error){
        res.status(500).json(error)
    }
})



// GET TOKEN

router.get("/gettoken" , (req, res)=>{
    try{
        const token = req.header("jwt") || req.cookies.jwt;
        const verify = jwt.verify(token, "asharasharashar");
        res.status(200).json(verify)
    }
    catch(err){
        res.status(404).send(err)
    }
})




module.exports = router ;


