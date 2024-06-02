const mongoose = require('mongoose');

const onlineCourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    required: true,
  },
  courseComplete: {
    type: Boolean,
    default: false,
  },
  courseAbout: [
    {
      content: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ['text', 'video'], // You can add more types if needed
        required: true,
      },
    },
  ],
  courseContent: [
    {
      content: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ['module'], // You can add more types if needed
        required: true,
      },
    },
  ],
});


const onlineCourse = mongoose.model('OnlineCourse', onlineCourseSchema);

module.exports = onlineCourse;