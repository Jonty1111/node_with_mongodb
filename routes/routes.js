const { Router } = require("express")
const express=require("express")

const router=express.Router()

const controller=require("../controller/UserConroller")

//API Paths
router.post("/add-user",controller.addUser)
//After Lunch
//path to find all user
router.get("/get-all-user",controller.getAllUser)

router.get("/get-user",controller.getUser)

router.get("/get-by-name/:fname",controller.getByName)

router.get("/get-name-and-age",controller.getNameAndAge)

router.put("/update-age-by-name",controller.updateAgeByname)

router.put("/update-age-by-name-inc",controller.updateAgeBynameinc)

router.put("/update-age-by-name-pratham/:fname/:age", controller.updateAgeByName)

router.delete("/delete-by-name/:fname", controller.deleteByName)

module.exports=router