const express = require('express');
const bcrypt = require('bcrypt');

var router = express.Router();
const Doctor = require('../../database/models/Doctor');

//Doctor SignIn Route
router.post("/tSignIn",async (req,res)=>{
    try{
      const email=req.body.email;
      
      const password=req.body.password;
     
      const user = await Doctor.findOne({email:email});
      
      const match = await bcrypt.compare(password,user.password);
      
      //generating jwt token for authentication
      const token = await user.generateAuthToken();
      console.log(token);
      //storing token in cookies
      res.cookie("jwt", token, { expires: new Date(Date.now() + 5000000),httpOnly: true });
  
      console.log(req.cookies);
      if(user&&match)
      {
        res.status(200).json({message:"LoggedIn"});
        console.log("LoggedIn Succesfully");
      }else{
        res.status(400).send('Wrong Credentials');
      }
    }catch(err){
      console.log(err);
    }
    
  
  });

  
//Doctor SignUp Route
router.post('/SignUp',(req,res)=>{
    const {firstName,lastName,email,phone,qualifications,speciality,address,password,cpassword}= req.body;
    
    if(password===cpassword)
    {
        const user = new Doctor({firstName,lastName,email,phone,qualifications,speciality,address,password});
        user.save().then(()=>{
        res.status(201).json({message: "user registered successfuly"});
        }).catch((err)=>{
            console.log(err);
        })
    }else{
        res.status(400).send("Password are Not matching");
    }
    
  });


  //For searching doctors
  router.get("/search", async (req,res)=>{
   
    try{
      const searchVal = req.body.search;
      const data= await Doctor.find({speciality:searchVal}, '_id firstName lastName qualifications speciality address');
      
      res.status(200);
      res.json(data);
      console.log("Here is the data");
    }catch (err){
      console.log("Error Fetching Data");
      res.status(400);
    }
    

  });
  
  module.exports=router;