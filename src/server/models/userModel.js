const mongoose= require('mongoose');
const bcrypt= require('bcrypt');
const validator= require('validator');
const Schema=mongoose.Schema
const UserSchema=new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    }
})
UserSchema.statics.signup=async(username,email,password,mobile,role)=>{

    if(!email || !password || !mobile || !role || !username){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    const exists=await this.findOne({email})
    if(exists){
        throw Error('Email already exists')
    }
    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)
    const user=await this.create({username,email,password:hash,mobile,role})
    return user
}

UserSchema.statics.login=async function(email,password){
    if(!email || !password){
        throw Error('All fields must be filled')
    }
    const user=await this.findOne({email})
    if(!user){
        throw Error('Incorrect Email')
    }
    const match=await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Incorrect Password');
    }
    return user
}   

module.exports=mongoose.model('User',UserSchema,'User')