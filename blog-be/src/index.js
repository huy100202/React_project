const express = require("express");
const app = express();
const db = require("./config/db");
const route = require("./routes");
const bodyParser = require('body-parser');

db.connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
route(app);
app.listen("5000", () => {
  console.log("asdasd");
});
