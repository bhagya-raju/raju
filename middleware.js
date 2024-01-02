import Jwt from "jsonwebtoken";

const middleware = (req,res,next) =>{
try{
    let token=req.header('x-token');
    if(!token){
        return res.status(400).send("Token Not Found")
    }
    let decoded = Jwt.verify(token,'raju');
    req.user=decoded.user;
    next();
}
catch(err){
    console.log(err);
    return res.status(400).send("Authentication Error")
}
}

export default middleware;