const express = require('express');
const bcrypt = require('bcrypt');
const auth = require('../controllers/UserAuth');
var router = express.Router();


//User Model
const User = require('../../database/models/user');
const Doctor = require('../../database/models/Doctor');

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
    
    //generating jwt token for authentication
    const token = await user.generateAuthToken();
    
    //storing token in cookies
    res.cookie("jwt", token, { expires: new Date(Date.now() + 5000000),httpOnly: true });
 
    
    if(user&&match)
    { 
      res.status(201).json({message:"LoggedIn"});
      console.log("LoggedIn Succesfully");
    }else{
      console.log("Hii Guysasas");
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
      res.status(400).json({message:"Password must be same"});
  }
  
});

router.get('/userprofile',auth ,(req,res)=>{
  res.send(req.user);

});

router.get('/Userlogout',auth, async(req,res)=>{
  try {
    res.clearCookie("jwt");

    req.user.tokens = req.user.tokens.filter((curr) => {
        return curr.token !== req.token;
    });

    console.log("logout successfully");
    await req.user.save();
    res.status(200).send('Logged Out');
}
catch (error) {
    res.status(500).send(error);
}
});


//For searching doctors
router.get("/search", async (req,res)=>{
   
  try{
    const searchVal = req.query.data;
    //console.log(serachVal);
    const data= await Doctor.find({speciality:searchVal}, '_id firstName lastName qualifications speciality address');
    
    res.status(200);
    res.json(data);
    console.log(data);
  }catch (err){
    console.log("Error Fetching Data");
    res.status(400);
  }
  

});

module.exports=router;