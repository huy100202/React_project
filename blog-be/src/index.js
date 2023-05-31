const express = require("express");
const app = express();
const db = require("./config/db");
const route = require("./routes");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require('path');
const cors = require("cors");
app.use(cors());
db.connectDB();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    cb(null, "src/images");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  },
});
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"images")));
const fileFilter = (req, file, cb) => {
  const allowedExtensions = [".jpeg", ".png", ".jpg"];
  const fileExtension = path.extname(file.originalname);
  if (allowedExtensions.includes(fileExtension.toLowerCase())) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadImg = multer({ storage: storage, fileFilter: fileFilter });

app.post("/api/upload", uploadImg.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
route(app);
app.listen("5000", () => {
  console.log("asdasd");
});
