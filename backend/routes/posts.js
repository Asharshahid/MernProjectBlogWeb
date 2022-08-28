const router = require("express").Router();
const middleware = require("../middleware/middleware")
const jwt =require("jsonwebtoken");
const cookieParser =require("cookie-parser");
const Post = require("../models/post");
const User = require("../models/user");


// Create Post ~~~~~~~~~~~~~~~~~~~

router.post("/createpost", middleware, async(req, res)=>{
    try{
        const token = req.header("jwt") || req.cookies.jwt;
        const verify = jwt.verify(token,'asharasharashar');
        const findUser = await User.findById(verify._id)
        const {title, desc} = req.body;
        const newPost = new Post({
           title,desc,user_id:verify._id,username:findUser.username
       })
        const newPostSaved = await newPost.save()
        res.json(newPostSaved)
    }catch(error){
        res.json(`This is error : ${error}`)
    }
});

// Update Post ~~~~~~~~~~~~~~~~~~~

router.put("/updatepost/:id",middleware, async(req, res)=>{
    try{
        // Find User Id By "post"
        const postId = req.params.id;
        const findPost = await Post.findById(postId)
        const findUserIdByPost = findPost.user_id;
        // Find User Id By "jwt" Token
        const token = req.header("jwt") || req.cookies.jwt;
        const verify = jwt.verify(token,'asharasharashar');
        const findUserIdByToken = verify._id;
        // Compare Both TokenUserId & PostUserId 
        if(findUserIdByPost==findUserIdByToken){
            const updatePost = await Post.findByIdAndUpdate({_id:postId},{$set:req.body},{new:true})
            res.json({UpdatePost:"yes", updatePost})
        }else{
            res.json("This post is not your , you can,t update it.")
        }
                
    }catch(error){
        res.json(`This is error : ${error}`)
    }
});

// Delete Post ~~~~~~~~~~~~~~~~~~~

router.delete("/deletepost/:id",middleware, async(req, res)=>{
    try{
        // Find User Id By "post"
        const postId = req.params.id;
        const findPost = await Post.findById(postId)
        const findUserIdByPost = findPost.user_id;
        // Find User Id By "jwt" Token
        const token = req.header("jwt") || req.cookies.jwt;
        const verify = jwt.verify(token,'asharasharashar');
        const findUserIdByToken = verify._id;
        // Compare Both TokenUserId & PostUserId 
        if(findUserIdByPost==findUserIdByToken){
            const postDelete = await Post.findByIdAndDelete({_id:postId})
            res.json(postDelete)
        }else{
            res.json("This post is not your , you can,t delete it.")
        }
                
    }catch(error){
        res.json(`This is error : ${error}`)
    }
});

// Get Post By Id ~~~~~~~~~~~~~~~~~~~

router.get("/getpost/:id", async(req, res)=>{
    try{
        const postId = req.params.id;
        const findPost = await Post.findById(postId)
        res.json(findPost)
    }catch(error){
        res.json(`This is error : ${error}`)
    }
});


// Get All Post, UserName Post & Category Post ~~~~~~~~~~~~~~~~~~~


router.get("/getallpost", async(req, res)=>{
    try{
        const username = req.query.user;
        const catName = req.query.cat;

        let posts;

        if(username){
            posts = await Post.find({username})
        }
        else if(catName){
            posts = await Post.find({
                categorpostsies :{
                    $in :[catName],
                },
            })
        }
        else{
            posts = await Post.find()
        }

        res.status(200).json(posts)

    }
    catch(error){
        res.json(`This is error : ${error}`)
    }
});



module.exports = router ;
