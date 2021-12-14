const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const Router = require('./router/Router');
const DoctorRouter = require('./router/DoctorRoute');
const cookieParser= require('cookie-parser');


const app = express();

//To Connection with the database 
require('../database/connection');

app.use(cookieParser());
app.use(express.json());


//To generate Port Number
const port = process.env.PORT || 8000;


app.use('/',Router);
app.use('/Doctor',DoctorRouter); 




app.listen(8000,()=>{console.log(`server running at ${port}`)});