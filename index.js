//Importing Express modules (as a constant)
const { response } = require("express")
const express=require("express")

//Initializing Express app
const app=express()

//
app.listen(3000,() => {
    console.log("Server running on port 3000")
})

//default route first
app.use("/",(req,res)=>{
    res.send("Welcome to Node Application here please it")
})


