
import express from 'express';
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcrypt";

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
    res.status(500).json(err)
   }
})


router.get("/",(req, res)=>{
    res.send("hey its user route")
})

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
});

export default router