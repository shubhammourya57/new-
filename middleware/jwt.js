const jwt  = require("jsonwebtoken")
const { JWT_SECRET } = require("../middleware/jwt");
module.exports=(req,res,next)=>{
    try{
        console.log(req.headers,"<======")
        var token = req.headers.token
        const decoded = jwt.verify(token,'secretkey');
        console.log(decoded)
        req.userData = decoded
        next();

    }catch(error){
        if(error){
            res.status(200).json({
                Auth : "Failed",
                message:"Please check your Token",
                status:400
            })
        }
    }
}

