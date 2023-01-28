const mongoose = require("mongoose")
const {GetCurrentDate,GetCurrentTime} = require("../Utils/DataStructure")

const GetCurrent1Date=GetCurrentDate()
const GetCurrent1Time=GetCurrentTime()

const noteSchema = mongoose.Schema({
    title:String,
    note:String,
    category:[],
    userID:String,
    NoteDate:{type:String,default:GetCurrent1Date},
    NoteTime:{type:String,default:GetCurrent1Time}
})


const NoteModel = mongoose.model("notes",noteSchema)

module.exports={
    NoteModel
}