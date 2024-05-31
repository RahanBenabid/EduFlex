const express = require("express");
const { addCourse, getAllCourses } = require("../controller/Course");
const router = express.Router();

router.post("/userCourses", addCourse);
router.get("/", getAllCourses);

module.exports = router;
