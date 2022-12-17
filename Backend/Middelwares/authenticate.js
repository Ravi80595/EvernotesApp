const jwt = require("jsonwebtoken")

const authenticate = (req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1]
    if(token){
        const decoded = jwt.verify(token,'ravi')
        if(decoded){
            const userID  =decoded.userID
            req.body.userID = userID
            next()
        }
        else{
            res.send({"msg":"Please Login"})
        }
    }
    else{
        res.send({"msg":"Please Login"})
    }
}
module.exports={
    authenticate
}