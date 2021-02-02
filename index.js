const express=require("express");
const bodyParser= require('body-parser');
const path=require("path");
require('dotenv').config();

const app=express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000,()=>console.log("Listening at port 3000"));