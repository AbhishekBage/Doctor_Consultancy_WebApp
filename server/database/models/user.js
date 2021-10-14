require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


//User Schema( Definations of User Data)
const UserSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    token:{
      type:String,  
    }
});

//Encyrpting User_Password
UserSchema.pre('save',async function(next){

     try{
       const salt = await bcrypt.genSalt(10);

       const hashPassword = await bcrypt.hash(this.password,salt);

       this.password=hashPassword;

       next();

     }catch(err){
      console.log(err);
     }
});

//Generating token for Authentication
UserSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.token =token;
        await this.save();
    
    }catch(err){

        console.log(err);
    }
    
}


const User = mongoose.model("User",UserSchema);


module.exports= User;