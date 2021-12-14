const mongoose =require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const DoctorSchema = new mongoose.Schema({
    
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    email:{
      type:String,
      required:true
    },
    phone:{
        type:Number,
        required:true
    },
    qualifications:{
      type:String,
      required:true
    },
    speciality:{
        type:String,
        enum: ['General Physician', 'Gynecologist','Pediatrician', 'Cardiologist', 'Psychiatrist', 'Neurologist' , 'Otolaryngologist', 'Ophthalmologist' , 'Nephrologist','Pulmonologist'],
        required:true
    },
    experience:{
        type:Number,
        
    },
    address:{
        addressline1:String,
        addressline2:String,
        city:String,
        pincode:Number,
        state:String,
        country:String
    },
    password:{
        type:String,
        required:true
    },
    tokens:[{
       token:{
           type:String,
       }
    }]
});

DoctorSchema.pre('save',async function(next){

    try{
   
       if(this.isModified("password")){
           this.password = await bcrypt.hash(this.password, 10);
           
       }

      next();

    }catch(err){
     console.log(err);
    }
});


DoctorSchema.methods.generateAuthToken = async function(){
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

const Doctor = new mongoose.model("Doctor",DoctorSchema);

module.exports=Doctor;