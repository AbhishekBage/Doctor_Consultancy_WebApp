const jwt = require('jsonwebtoken');


const Doctor = require('../../database/models/Doctor');


const Userauth = async (req,res,next) =>{
    
    try{
       
        const Reqcookie = req.cookies.jwt;
        
        const verifyUser = jwt.verify(Reqcookie,process.env.SECRET_KEY);
        
        const doctorData = await Doctor.findOne({_id: verifyUser._id,"tokens.token":Reqcookie});
        if(!doctorData)
        {   console.log("No user found");
           throw new Error('User Not found');
        }
        req.user = doctorData;
        req.token = Reqcookie;
        next();
    } catch (error) {
        
        res.status(401).send('Unauthorise User');
    }

   
}


module.exports = Userauth;