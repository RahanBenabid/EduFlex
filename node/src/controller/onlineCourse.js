const onlineCourse = require('../models/onlineCourse');
const OnlineCourse = require('../models/onlineCourse'); // Import your OnlineCourse model
const User = require("./../models/User")


//GET a specific course
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

//GET the name of the courses in the user completed table
exports.getCompletedCourses = async (req, res) => {
  const userId = req.query.userId;
  try {
    const user = await User.findById(userId).populate('completedCourses');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const completedCoursesNames = user.completedCourses.map((course) => course.courseName);
    res.status(200).json(completedCoursesNames);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// PUT http://localhost:3000/onlineCourse/addCourse?userId=663b9d5e42fa3d9b2a3c3bac&courseId=665b358d8ff4f871b4c5f065
exports.addCompletedCourse = async (req, res) => {
  try {
    const userId = req.query.userId;
    const courseId = req.query.courseId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the courseId already exists in the completedCourses array
    if (user.completedCourses.includes(courseId)) {
      return res.status(400).json({ message: 'Course already marked as completed' });
    }

    user.completedCourses.push(courseId);
    await user.save();

    res.status(200).json({ message: 'Course added to completed courses' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// DELETE http://localhost:3000/onlineCourse/removeCourse?userId=663b9d5e42fa3d9b2a3c3bac&courseId=665b358d8ff4f871b4c5f065
exports.removeCompletedCourse = async (req, res) => {
  try {
    const userId = req.query.userId;
    const courseId = req.query.courseId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the courseId exists in the completedCourses array
    const index = user.completedCourses.indexOf(courseId);
    if (index === -1) {
      return res.status(400).json({ message: 'Course not found in completed courses' });
    }

    user.completedCourses.splice(index, 1);
    await user.save();

    res.status(200).json({ message: 'Course removed from completed courses' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.checkCourseCompletion = async (req, res) => {
  try {
    const userId = req.query.userId;
    const courseId = req.query.courseId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isCourseCompleted = user.completedCourses.includes(courseId);
    res.status(200).json({ isCourseCompleted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};