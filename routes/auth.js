
import express from 'express';
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcrypt"

//REGISTER
router.post("/register", async (req, res) => {
   try{
//GENERATE NEW PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
//CREATE NEW USER
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });
//SAVE USER AND RETURN SESPONSE
    const user = await newUser.save();
    res.status(200).json(user);
   } catch(err){
        console.log(err)
   }
})


router.get("/",(req, res)=>{
    res.send("hey its user route")
})

export default router