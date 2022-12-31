const express = require("express")

const {NoteModel} = require("../Modles/notes.model")
const noteRouter = express.Router()
const {authenticate} =require("../Middelwares/authenticate")


// All notes from Here for users

noteRouter.get("/notes",authenticate,async(req,res)=>{
    try{
        const notes = await NoteModel.find()
        res.status(200).send({"msg":"All User Here",notes})
    }
    catch(err){
        console.log(err)
        res.status(400).send({"err":"Something went wrong"})
    }
})

// note Create Method

noteRouter.post("/create",authenticate,async(req,res)=>{
    const payload = req.body
    try{    
        const new_note = new NoteModel(payload)
        await new_note.save()
        res.status(200).send({'msg':"New Note Created Successfully"})
    }   
    catch(err){
        console.log(err)
        res.status(400).send({"err":"Something went wrong"})
    }
})

// Notes Update Method

noteRouter.patch("/update/:noteID",authenticate,async(req,res)=>{
    const noteID  = req.params.noteID
    const userID = req.body.userID
    const notes = await NoteModel.findOne({_id:noteID})
    if(userID !==notes.userID){
        res.status(400).send({"msg":"User is not Authorized"})
    }
    try{
         await NoteModel.findByIdAndUpdate({_id:noteID},req.body)
         res.status(200).send({"msg":"Note Updated successfully"})
    }
    catch(err){
        console.log(err)
        res.status(400).send({"err":"Something went wrong"})
    }
})

// Delete Method Here

noteRouter.delete("/delete/:noteID",authenticate,async(req,res)=>{
    const noteID = req.params.noteID
    const userID = req.body.userID
    const note = await NoteModel.findOne({_id:noteID})
    // console.log(note)
    // console.log(userID)
    if(userID !== note.userID){
        res.status(400).send({"msg":"User is not Authorized"})
    }else{
        await NoteModel.findByIdAndDelete({_id:noteID})
        res.status(200).send({"msg":"Note Deleted successfully"})
    }
})

// All Notes for admin

noteRouter.get("/notess",async(req,res)=>{
    try{
        const notes = await NoteModel.find()
        res.status(200).send({"msg":"All User Here",notes})
    }
    catch(err){
        console.log(err)
        res.status(400).send({"err":"Something went wrong"})
    }
})


module.exports = {
    noteRouter
}