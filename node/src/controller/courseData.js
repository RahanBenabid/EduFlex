const client = require("./../configuration/dbConfig.js");  // Assuming you need this for some reason
const OnlineCourse = require('./../models/onlineCourse');  // Import your OnlineCourse model



exports.getCourse = async (req, res) => {
    try {
        console.log('getCourse function called');
        const courseTitle = req.query.courseTitle;
        console.log(`Requested course title: ${courseTitle}`);
        
        const course = await OnlineCourse.find({ courseName: courseTitle });
        
        console.log('Found course:', course);
        res.json(course);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Server error" });
    }
};

// GET all the courses
exports.getAllCourses = async (req, res) => {
    try {
        console.log('Request received:', req.method, req.url);
        const onlineCourses = await OnlineCourse.find({});
        console.log('Courses found:', onlineCourses);
        res.json(onlineCourses);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Server error" });
    }
};

// POST a course
exports.addCourse = async (req, res) => {
    try {
        const { courseName, courseDescription, courseComplete } = req.body;
        
        // Save the model
        const newOnlineCourse = new OnlineCourse({
            courseName,
            courseDescription, 
            courseComplete,
        });
        const savedOnlineCourse = await newOnlineCourse.save();
        res.status(200).json({ message: "Course added successfully", course: savedOnlineCourse });
    } catch (e) {
        console.error(e);
        res.status(400).json({ error: "Failed to add course" });
    }
};

