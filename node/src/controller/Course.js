const Course = require("../models/Course.js");
const multer = require('multer');
const path = require("path");
const uploadDir = path.join(__dirname, "../../../database/")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits :{
    fileSize: 10485760,
  },
  fileFilter: function(req, file, cb) {
    if(!file.originalname.match(/\.(pdf)$/)) {
      return cb(new Error('only pdf files allowed'))
    }
    cb(null, true)
  }
});

// GET all the courses
exports.getAllCourses = async (req, res) => {
  try {
    console.log('Request received:', req.method, req.url);
    const courses = await Course.find({});
    console.log('Courses found:', courses);
    res.json(courses);
  } catch (e) {
    console.log(e);
    res.status(401).json({ message: "Server error" });
  }
};

//POST a course
exports.addCourse = [
  upload.single("file"), // Use the multer middleware to handle file uploads
  async (req, res) => {
    try {
      const pdfSize = req.file.size;
      const { title, description } = req.body;
      const filepath = req.file.path;
      
      //save the model
      const newCourse = new Course({
        title,
        description,
        fileSize: pdfSize,
        filepath,
      });
      const savedCourse = await newCourse.save();
      res
      .status(200)
      .json({ message: "Course added successfully", course: savedCourse });
    } catch (e) {
      console.error(e);
      res.status(400).json({ error: "Failed to add course" });
    }
  },
];