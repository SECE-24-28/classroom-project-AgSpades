const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const myCourse = require("./model/CourseModel");

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());

const mongoURI =
  "mongodb://myuser:mypassword@localhost:27017/courses?authSource=admin";

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

app.get("/api/courses/:id", async (req, res) => {
  try {
    const course = await myCourse.model.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/courses", async (req, res) => {
  try {
    const newCourse = new myCourse.model(req.body);
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put("/api/courses/:id", async (req, res) => {
  try {
    const updatedCourse = await myCourse.model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // to return the updated document
    );
    if (!updatedCourse) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/api/courses/:id", async (req, res) => {
  try {
    const deletedCourse = await myCourse.model.findByIdAndDelete(req.params.id);
    if (!deletedCourse) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
