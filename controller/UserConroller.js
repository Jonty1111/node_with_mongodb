const UserModel = require("../models/UserModel")

exports.addUser = (req,res) => {
    const user = new UserModel({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        age:req.body.age       
    })   
    user.
        save().
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}


//after lunch
exports.getAllUser = (req,res) => {
    const user = UserModel.find()
    user.
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}

exports.getUser = (req,res) => {
    const user = UserModel.find({fname:"Alice"})
    user.
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}
//Ques-1
//getByName
exports.getByName = (req,res) => {
    const user = UserModel.find({fname:req.params.fname})
    user.
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}

//Ques-2
//custom fields
exports.getNameAndAge = (req,res) => {
    const user = UserModel.find({},{fname:1,age:1})
    user.
        then( (data) => {
            res.status(200).json({
                message:"Successfully got the name and age",
                data:data
            })
        }).
        catch( (error) => {
            res.send(error)
        })
}



//update Age ByName(ismeh basically name dekar hmm age ko update krenege)
exports.updateAgeByname=(req,res)=>{
    
    UserModel.findOne({fname:"JS1"},(error,user)=>{
        if(error) res.send(error)
        user.age=req.body.age ? req.body.age: user.age
        user.save((error)=>{
            if(error) res.send(error)
            res.status(200).json({
                message:"Successfully got the name and age",
                data:user
            })
        })
    })
    
}





/*
//update ByName(ismeh basically name dekar hmm age ko update krenege)
exports.updateAgeBynameinc=(req,res)=>{
    //updateOne.{{},{$inc;{age:25}}}
    UserModel.updateOne({fname:"JS1"},{$inc:{age:25}},(error,user)=>{
        if(error) res.send(error)
        user.age=req.body.age ? req.body.age: user.age
        console.log(user) 
        
    })
 
    
}
*/

//send by kalyan
exports.updateAgeBynameinc= (req,res) => {

    UserModel.updateOne({fname:"JS2"}, { $inc : {age : 25}}, (data) => {

        res.status(200).json({

            message : "successfully updated Carol's Age",
            data:data

        })

    })

}

//Pratham ne send kiya hai github se uthaya hai mene
exports.updateAgeByName = (req,res) => {
    UserModel.updateOne({fname:req.params.fname}, { $inc : {age : req.params.age}}, () => {
        res.status(200).json({
            message : "Successfully incremented "+req.params.fname+"'s age by "+req.params.age
        })
    })
}

// deleteUser
exports.deleteByName = (req,res) => {
    UserModel.deleteOne({fname:req.params.fname}, () => {
        res.status(200).json({
            message : "Successfully Deleted "+req.params.fname+"'s Data"
        })
    })
}


// q3 (regex)
exports.query3 = (req,res) => {
    const users = UserModel.find({lname: {$regex : ".*"+req.params.str+".*"}})

    users.
        then( (data) => {
            res.status(200).json({
                message:"Successfully got data where last name contains '"+req.params.str+"'",
                data:data,
            })
        }).
        catch( (error) => {
            res.send(error)
        })
}

// q4 (distinct)
exports.query4 = (req,res) => {
    const distinctAges = UserModel.distinct("age")
    distinctAges.
        then( (data) => {
            res.status(200).json({
                message:"Successfully got all distinct ages",
                data:data,
            })
        }).
        catch( (error) => {
            res.send(error)
        })

}

// q5 (aggregate) (finding sum of ages)
exports.query5 = (req,res) => {
    const users = UserModel.aggregate([
        { 
            $group: { 
                _id : null,
                ageSum : { $sum: "$age" } 
            }    
        },
        // only showing ageSum
        { $project: { _id :0, ageSum: 1 } }
    ])

    users.
        then( (data) => {
        res.status(200).json({
            message:"Successfully got sum of ages ",
            data : data
        })
    }).
    catch( (error) => {
        res.send(error)
    })
}

// q8 updating (NOT WORKING (NOT ABLE TO CHANGE type of age from integer to array of integers))
// Also, other queries will not work since we dont have field of array of integers
exports.query8 = (req,res) => {
    UserModel.updateMany(
        {age:{$lt:30}}, 
        {$set : {age: [20,25]}},
        () => {
            res.status(200).json({
                message : "Updated ages for people less than 30"
            })
        }
    )
}





