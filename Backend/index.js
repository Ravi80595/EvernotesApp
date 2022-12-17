const express = require('express')
const cors = require('cors')

const {connection } =require("./config/db")
const {UserRouter} = require('./Routes/User.Route')
const {noteRouter} = require("./Routes/Notes.Route")
// const {authenticate} = require('./Middelwares/authenticate')
const app = express()


app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send({"msg":"welcome to main page of API"})
})

app.use("/user",UserRouter)

// app.use(authenticate)

app.use("/",noteRouter)



app.listen(2147,async()=>{
    try{
        await connection
        console.log("Connected to Database")
    }
    catch(err){
        console.log(err)
        console.log("connection failed")
    }
    console.log("Listning on Port 0147")
})