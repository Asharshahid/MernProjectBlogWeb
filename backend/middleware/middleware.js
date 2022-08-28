const jwt =require("jsonwebtoken");


const middleware = (req, res, next)=>{

    try{
        const token = req.header("jwt") || req.cookies.jwt ;
        const verify = jwt.verify(token, "asharasharashar");
        next();
    }catch(error){
        res.send(`Catch error is ${error}`)
    }
}

module.exports=middleware;