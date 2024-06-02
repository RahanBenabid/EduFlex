const onlineCourse = require('../models/onlineCourse');
const OnlineCourse = require('../models/onlineCourse'); // Import your OnlineCourse model

exports.getCourse = async (req, res) => {
  try {
    console.log('getCourse function called');
    const courseTitle = req.query.courseTitle;
    console.log(`Requested course title: ${courseTitle}`);

    const course = await OnlineCourse.findOne({ courseName: courseTitle });

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

    // Use .select() to specify the fields you want to include
    const onlineCourses = await onlineCourse.find()

    // const firstCourse = onlineCourses[0]; // Assuming you want the first course
    // console.log('Course Name:', firstCourse.courseAbout[0].content);


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
    const { courseName, courseDescription, courseComplete, courseAbout, courseContent } = req.body;

    // Save the model
    const newOnlineCourse = new OnlineCourse({
      courseName,
      courseDescription,
      courseComplete,
      courseAbout,
      courseContent,
    });
    const savedOnlineCourse = await newOnlineCourse.save();
    res.status(200).json({ message: "Course added successfully", course: savedOnlineCourse });
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: "Failed to add course" });
  }
};