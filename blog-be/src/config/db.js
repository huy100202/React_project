const mongoose = require("mongoose");

async function connectDB() {
  try {
    mongoose.connect("mongodb://localhost:27017/react_project", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB")
  } catch (err) {
    console.log(err);
  }
}

module.exports = {connectDB};