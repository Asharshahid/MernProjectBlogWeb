const mongoose =require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();

// mongoose.connect(process.env.MongoUrl, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     // useCreateIndex:true,
//     // useFindAndModify:false
// }).then(console.log("Connection succesful in mongodb internet"))
// .catch( (error)=>{console.log(`Connection failed ${error}`)})

mongoose.connect('mongodb://localhost:27017/MyBlogWebMern', {
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:fasle
}).then(()=>{console.log("Connection succesful")})
.catch( (error)=>{console.log(`Connection failed ${error}`)})
