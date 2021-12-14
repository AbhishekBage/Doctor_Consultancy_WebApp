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
    tokens:[{
        token:{
            type:String,
        }
   }],
});

//Encyrpting User_Password
UserSchema.pre('save',async function(next){

     try{
    
        if(this.isModified("password")){
            this.password = await bcrypt.hash(this.password, 10);
            
        }

       next();

     }catch(err){
      console.log(err);
     }
});

//Generating token for Authentication
UserSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        //this.token =token;
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token;
    }catch(err){

        console.log(err);
    }
    
}


const User = mongoose.model("User",UserSchema);


module.exports= User;