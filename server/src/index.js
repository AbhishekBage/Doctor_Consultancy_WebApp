const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const Router = require('./router/Router');



const app = express();

//To Connection with the database 
require('../database/connection');


app.use(express.json());


//To generate Port Number
const port = process.env.PORT || 8000;


app.use('/',Router);









app.listen(8000,()=>{console.log(`server running at ${port}`)});