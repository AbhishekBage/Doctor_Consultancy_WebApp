const express = require('express');
const bcrypt = require('bcrypt');

var router = express.Router();


//User Model
const User = require('../../database/models/user');

router.get('/',(req,res)=>{
  res.send("<h1>Starting Page First Page</h1>");
 });


//SignIn Route
router.post("/signIn",async (req,res)=>{
  try{
    const email=req.body.email;
    const password=req.body.password;
    const user = await User.findOne({email:email});
    const match = await bcrypt.compare(password,user.password);
    
      
    
    if(user&&match)
    {
      res.status(201).json({message:"LoggedIn"});
      console.log("LoggedIn Succesfully");
    }else{
      res.status(400).send('Wrong Credentials');
    }
  }catch(err){
    console.log(err);
  }
  

});

//SignUp Route
router.post('/signUp',(req,res)=>{
  const {firstName,lastName,email,password,cpassword}= req.body;
  if(password===cpassword)
  {
      const user = new User({firstName,lastName,email,password});
      user.save().then(()=>{
      res.status(201).json({message: "user registered successfuly"});
      }).catch((err)=>{
          console.log(err);
      })
  }else{
      window.alert('confirm password Should be same as password');
  }
  
});

module.exports=router;