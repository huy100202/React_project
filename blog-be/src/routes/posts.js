const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const { post } = require("./auth");

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  console.log(newPost);
  try {
    const savePost = await newPost.save();
    res.status(200).send(savePost);
  } catch (e) {
    res.status(500).json(e);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatePost = await Post.findById(req.params.id);
    if (updatePost.userId === req.body.userId) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).send(updatePost);
      } catch (e) {
        res.status(500).json(e);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    id = post._id.toString();
    if (post.userId === req.body.userId) {
      try {
        await Post.deleteOne({ _id: id });
        res.status(200).json("Post has been deleted");
      } catch (e) {
        res.status(500).json(e);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});
//GET
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate({ path: 'author', model: User ,select: "full_name email",});
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL
router.get("/", async (req, res) => {
  const userId = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (userId) {
      posts = await Post.find({ userId });
    } else if (catName) {
      post = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
