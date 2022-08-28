// This Is Require Area
require("./db/conn");
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000;
const authRouter  =  require("./routes/auth");
const usersRouter =  require("./routes/users");
const postsRouter =  require("./routes/posts");

// This Is Use Area
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());


// signup & signin ~~~~~~~~~~~~~~~~~~~
app.use(authRouter);
// Get , Update & Delete user ~~~~~~~~~~~~~~~~~~~
app.use(usersRouter);
// Create , Get , Update & Delete post ~~~~~~~~~~~~~~~~~~~
app.use(postsRouter);

app.get("/", (req,res)=>{
    console.log("Home routes worked finally")
    res.send("Yes Home Worked Perfectly")
});


// This Is Port Listean Area

app.listen( port , ()=>{
    console.log(`Run at ${port} port`);
})