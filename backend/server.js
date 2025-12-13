const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

let courses = require("./data/db.json");

app.get("/", (req, res) => {
  res.send("Welcome to the Courses API");
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.post("/api/courses", (req, res) => {
  const { cname, cdur } = req.body;
  const cid = courses.length
    ? String(Number(courses[courses.length - 1].cid) + 1)
    : "1";
  const newCourse = { cid, cname, cdur };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

app.get("/api/courses/:id", (req, res) => {
  const courseId = req.params.id;
  const course = courses.find((c) => c.cid === courseId);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.put("/api/courses/:id", (req, res) => {
  const courseId = req.params.id;
  const { cname, cdur } = req.body;
  const courseIndex = courses.findIndex((c) => c.cid === courseId);
  if (courseIndex !== -1) {
    courses[courseIndex] = { cid: courseId, cname, cdur };
    res.json(courses[courseIndex]);
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.delete("/api/courses/:id", (req, res) => {
  const courseId = req.params.id;
  const courseIndex = courses.findIndex((c) => c.cid === courseId);
  courses = courses.filter((c) => c.cid !== courseId);
  if (courseIndex !== -1) {
    res.json({ message: "Course deleted successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
