const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    avtar:String,
    role:String
})

const UserModel = mongoose.model("User",userSchema)


module.exports={
    UserModel
}