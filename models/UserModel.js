const mongoose=require("mongoose")

//creating a schema on type of data communicate to mongodb

const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }

})

//var a=10 
//module.exports=a -> can be a variable function class used everywhere accessed using require(a)
module.exports= mongoose.model("user",userSchema)
