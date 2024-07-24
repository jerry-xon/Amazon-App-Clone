const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose
  .connect("mongodb+srv://jerry-xon:jayesh123@cluster0.iwjuwkv.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });

  
  app.listen(port, ()=>{
    console.log("Server is running on port 8000");
  })

  //endpoint to register in the app
  app.post("/register",async(res,res) =>{

    try{

    }catch(error){
      console.log("error resgistering user",error)
      res.status(500).json({message:"Resgistration failed"})
    }
  })
