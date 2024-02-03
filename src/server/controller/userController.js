const User=require('../models/userModel')
const loginUser=async(req,res)=>{
    res.json({msg:'Login user'})
}
const signupUser=async(req,res)=>{
    const{username,email,password,mobile,role}=req.body;
    try{
        const user=await User.signup(username,email,password,mobile,role)
        res.status(200).json({email,user})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports={loginUser,signupUser}