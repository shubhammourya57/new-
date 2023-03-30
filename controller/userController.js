const userSchema = require("../model/userModel")
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const secretkey = 'secretkey'

exports.signUp = async(req,res)=>{
try {
    var hash = bcrypt.hashSync(req.body.password,8);
    const data = await userSchema.create({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        password:hash
    })
    if(data){
        return res.status(200).json({message:"data is submitted successfully",data:data})
    } return res.status(400).json({message:"data is  not submitted",data:{}})
} catch (error) {
  console.log(error)  
}
}

exports.logIn = async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password
         const emailMatch = await userSchema.find({email:email})
         console.log(emailMatch,"<=====emailMatch")
        if(emailMatch != ""){
            const passMatch = await bcrypt.compareSync(password, emailMatch[0].password)
            if(passMatch){
                let token = await jwt.sign({emailMatch},secretkey)
                res.status(200).json({message:"login Success", token: token})
            } else {
                return res.status(200).json({message:"Wrong password"})
            }
        }else {
            return res.status(200).json({message:"email not match"})
        }
    } catch (error) {
      console.log(error)  
    }
}