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
  courseDescriptionTitle: {
    type: String,
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
  underCourseContent: [{type: String,},],
});


const onlineCourse = mongoose.model('OnlineCourse', onlineCourseSchema);

module.exports = onlineCourse;