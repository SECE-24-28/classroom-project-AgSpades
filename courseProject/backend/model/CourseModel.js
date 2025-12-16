const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

exports.model = mongoose.model("myCourse", CourseSchema);
