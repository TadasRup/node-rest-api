import express from 'express';
import Post from "../models/Post.js";
import User from "../models/User.js";
const router = express.Router();

//CREATE A POST

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//UPDATE A POST



//DELETE A POST



//LIKE A POST



//GET A POST



//GET TIMELINE POSTSS


export default router