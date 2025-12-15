const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const myCourse = require("./model/CourseModel");

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb://myuser:mypassword@localhost:27017/";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/", (req, res) => {
  res.send("Api is working!");
});

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await myCourse.model.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
