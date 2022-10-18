//Importing Express modules (as a constant)
const { response } = require("express")
const express=require("express")
const mongoose=require("mongoose")

//importing the router
const routes=require("./routes/routes")
//Initializing Express app
const app=express()

//for creating the server on port 3000
app.listen(3000,() => {
    console.log("Server running on port 3000")
})


app.use(express.json())
//default route first("/") with response of a string
app.use("/welcome",(req,res)=>{
    res.send("Welcome to Node Application here please it")
})


app.use("/user",routes)


//connecting to a database with mongoose library(mongoose.connect())
const uri="mongodb+srv://jontysingla:Beatsaudio123@cluster0.q30uesj.mongodb.net/employeeNodejs?retryWrites=true&w=majority"
mongoose.
    connect(uri,{useNewUrlParser:true}).
    then(()=>{console.log("Database Connected")}).
    catch((error)=>{console.log(error)})

