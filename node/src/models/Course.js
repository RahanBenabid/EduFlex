const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  fileSize: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  filepath: String,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
