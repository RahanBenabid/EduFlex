const express = require("express");
const { addCourse, getAllCourses, getCourse } = require("../controller/courseData.js");
const router = express.Router();

router.post("/onlineCourses", addCourse);
router.get("/course", getCourse)
router.get("/", getAllCourses);

module.exports = router;
