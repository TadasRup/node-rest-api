
import express from 'express';
const router = express.Router();
import User from "../models/User.js";

//REGISTER
router.get("/register", (req, res) => {
    const user = new User({
        username:"tadas",
        email:"tadas@gmail.com",
        password:"123456"
    })

    user.save()
})



router.get("/",(req, res)=>{
    res.send("hey its user route")
})

export default router