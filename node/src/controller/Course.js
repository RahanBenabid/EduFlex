const express = require('express');
const fs = require('fs');
const Course = require("../models/Course.js");
const multer = require('multer');
const path = require("path");
const uploadDir = path.join(__dirname, "../../../database/")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const name = `${Date.now()}-${file.originalname}`;
    cb(null, name);
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
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const { userId, title, description } = req.body;
      const name = req.file.filename;
      const filepath = path.join(uploadDir, name);



      // Save the course model
      const newCourse = new Course({
        title,
        name,
        description,
        fileSize: req.file.size,
        filepath,
        userId,
      });
      const savedCourse = await newCourse.save();

      res.status(200).json({ message: "Course added successfully", course: savedCourse });
    } catch (e) {
      console.error(e);
      res.status(400).json({ error: "Failed to add course" });
    }
  },
];


// GET all the courses for a specific user
exports.getUserCourses = async (req, res) => {
  try {
    const userId = req.params.userId;
    const courses = await Course.find({ userId });
    
    const pdfs = courses.map(course => {
      const filePath = path.join(__dirname, "../../../database/", course.name);
      const fileData = fs.readFileSync(filePath);
      const base64Data = fileData.toString('base64');

      return {
        name: course.name,
        title: course.title,
        description: course.description,
        fileSize: course.fileSize,
        fileData: base64Data,
      };
    });

    res.json(pdfs);
  } catch (e) {
    console.log(e);
    res.status(401).json({ message: "Server error" });
  }
};