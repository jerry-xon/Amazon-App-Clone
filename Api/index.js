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


app.listen(port, () => {
  console.log("Server is running on port 8000");
})

const user = require("./Models/User");
const Order = require("./Models/Order")

const sendvarificationEmail = async (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jppurswani2004@gmail.com",
      pass: "syftmmmcotmofign"
    }
  })

  //email message
  const mailOptions = {
    from: "amazon.com",
    to: email,
    subject: "Email Verification",
    text: `Please click the following link to verify the Email: http://locahost:8000/verify/${verificationToken}`
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error sending verificaton email", error);

  }
}

//endpoint to register in the app
app.post("/register", async (res, res) => {

  try {
    const { name, email, password } = req.body;
    //check if the user already exists
    const existinguser = await user.findOne({ email })
    if (existinguser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    // new user
    const newUser = new user({ name, email, password });

    //verification
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save newUser
    await newUser.save();

    //verification email to newUser 
    sendvarificationEmail(newUser.email, newUser.verificationToken);

  } catch (error) {
    console.log("error resgistering user", error);
    res.status(500).json({ message: "Resgistration failed" });
  }
})


//end point to verify the email 

app.get("/verify/:token",async(req,res)=>{
  try{
    const token = req.params.token;

    //find the user with given verification token
    const user =await user.findOne({verificationToken: token}); 
    if(!user){
      return res.status(404).json({message: "Invalid verification token"})
    }

    // mark the user a verified
    user.verified = true;
    user.verificationToken = undefined;
    await user.save();
    res.status(200),json({message:"Email verification successful"});

  }catch(error){
    res.status(500).json({message: "Email verification failed"});
  }
})