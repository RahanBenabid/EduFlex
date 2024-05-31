const mongoose = require('mongoose');


// Define the course schema
const onlineCourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true
  },
  courseDescription: {
    type: String,
    required: true
  },
  courseComplete: {
    type: Boolean,
    default: false
  },
  courseAbout: [{ // Array of objects
    content: String, // String field for content
    type: String // String field for content type
  }],
  courseContent: [{ // Array of objects
    content: String, // String field for content
    type: String // String field for content type
  }]
});

// Create the course model
const onlineCourse = mongoose.model('OnlineCourse', onlineCourseSchema);

module.exports = onlineCourse;