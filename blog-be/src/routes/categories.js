const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

//CREATE
router.post("/",async (req, res) => {
    const newCat = new Category(req.body);
    try {
        const saveCat = await newCat.save();
        res.status(200).json(saveCat);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get
router.get("/",async (req, res) => {
    const newCat = new Category(req.body);
    try {
        const cate = await Category.find();
        res.status(200).json(cate);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;