const express = require('express');
const app = express();
const db = require("./config/db");
const authRoute = require("./routes/auth");

app.use("/",(req,res) => {
    console.log('huy1');
})
db.connectDB();
app.use(express.json());
app.use("/api/auth", authRoute);
app.listen("5000", () => {
    console.log('asdasd');
})