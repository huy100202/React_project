const express = require("express");
const app = express();
const db = require("./config/db");
const route = require("./routes");
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require("cors");
app.use(cors());
db.connectDB();

const storage = multer.diskStorage({
  destination : (req,file,cb) => {
    cb(null,"images");
  },
  destination : (req,file,cb) => {
    cb(null,req.body.name);
  }
});
const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res) => {
  res.status(200).json("File has been uploaded");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
route(app);
app.listen("5000", () => {
  console.log("asdasd");
});
