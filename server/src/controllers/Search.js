const Doctor = require("../../database/models/Doctor")

const searchDoctor = async(req,res,next) =>{

    try{
    const data = await Doctor.find({specialiy:req.body.search});

    if(data!=NULL)
    {
      res.status(200);
      res.json(data);
    }
    
    }catch(err){

    }
}