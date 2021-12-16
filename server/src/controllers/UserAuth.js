const jwt = require('jsonwebtoken');


const User = require('../../database/models/User');


const Userauth = async (req,res,next) =>{
    
    try{
       
        const Reqcookie = req.cookies.jwt;
        
        const verifyUser = jwt.verify(Reqcookie,process.env.SECRET_KEY);
        
        const user = await User.findOne({_id: verifyUser._id,"tokens.token":Reqcookie});
        if(!user)
        {   console.log("No user found");
           throw new Error('User Not found');
        }
        req.user = user;
        req.token = Reqcookie;
        next();
    } catch (error) {
        
        res.status(401).send('Unauthorise User');
    }

   
}


module.exports = Userauth;