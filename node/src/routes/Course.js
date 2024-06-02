const express = require("express");
const { addCourse, getAllCourses, getUserCourses } = require("../controller/Course");
const router = express.Router();

router.post("/userCourses", addCourse);
router.get("/", getAllCourses);
router.get("/courses/:userId", getUserCourses); // New route to get courses for a specific user

module.exports = router;