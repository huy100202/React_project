const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const regis = new User({
      full_name: req.body.full_name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await regis.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json("Wrong credentials");
    }
    const validate = await bcrypt.compare(req.body.password, user.password);
    if (!validate) {
      return res.status(400).json("Wrong credentials");
    }
    const {password, ...other} = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

module.exports = router;
