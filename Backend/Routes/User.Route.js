const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const UserRouter = express.Router()
const {authenticate} = require("../Middelwares/authenticate")

const { UserModel } = require("../Modles/User.model")


// Sign up logic here

UserRouter.post("/signup",async(req,res)=>{
    const {firstname,lastname,email,password}= req.body
    const userPresent = await UserModel.findOne({email})
    if(userPresent){
        res.status(201).send({"msg":"User Already Exists"})
    }
try{
    bcrypt.hash(password,4,async function(err,hash){
        const user = new UserModel({email,password:hash,firstname,lastname})
        await user.save()
        res.send({"msg":"Signup Successfull"})
    })

}
catch(err){
    console.log(err)
    res.send(400).send({"err":"Something went wrong"})
}
})

// Login here

UserRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try{
        const user = await UserModel.find({email})
        if(user.length>0){
            const hashed_password = user[0].password
            bcrypt.compare(password,hashed_password,function(err,result){
                if(result){
                    const token= jwt.sign({"userID":user[0]._id},'ravi')
                    res.status(200).send({"msg":"Login Success","token":token})
                }else{
                    res.status(400).send({"msg":"Login Failed"})
                }
            })
        }else{
            res.status(400).send({"msg":"Login Failed"})
        }
    }
    catch(err){
        console.log(err)
        res.send(400).send({"err":"Something went wrong"})
    }
})

// User Profile Method

UserRouter.get("/userProfile",authenticate,async(req,res)=>{
    const userID = req.body.userID
    try{
        const user = await UserModel.find({_id:userID})
        res.status(200).send({"msg":"User Details are Here","Data":user})
    }
    catch(err){
        console.log(err)
        res.status(400).send({'err':"Something went wrong"})
    }
})

// User Profile Update Method

UserRouter.patch("/userProfileEdit",authenticate,async(req,res)=>{
    const userID = req.body.userID
    try{
        const updateUser = await UserModel.findByIdAndUpdate({_id:userID},req.body)
        res.status(200).send({'msg':"Profile Updated"})
    }
    catch(err){
        console.log(err)
        res.status(400).send({'err':"Something went wrong"})
    }
})


module.exports={
    UserRouter
}