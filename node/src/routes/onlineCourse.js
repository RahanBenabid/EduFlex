const express = require("express");
const { addCourse, getAllCourses, getCourse, getCompletedCourses, addCompletedCourse, removeCompletedCourse, checkCourseCompletion } = require("../controller/onlineCourse.js");
const router = express.Router();

router.post("/onlineCourses", addCourse);
router.get("/course", getCourse)
router.get("/", getAllCourses);
router.get("/userCourses", getCompletedCourses);
router.put("/addCourse", addCompletedCourse);
router.delete("/removeCourse", removeCompletedCourse);
router.get("/checkCourse", checkCourseCompletion)

module.exports = router;
