const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  fileSize: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  filepath: String,
  userId: String
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
