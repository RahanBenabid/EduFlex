import React, { useState, useEffect } from "react";
import "./Progress.css";

function Progress() {
  const [courses, setCourses] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userObject = JSON.parse(localStorage.getItem('user'));
    const userId = userObject?._id;
    setUserId(userId);
    const fetchCompletedCourses = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/onlineCourse/userCourses?userId=${userId}`
        );
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching completed courses:", error);
      }
    };

    fetchCompletedCourses();
  }, []);

  return (
    <div className="container1">
      <h1 className="ttitle-text">Completed Courses</h1>
      {courses.map((course, index) => (
        <div key={index} className="skill-box">
          <span className="title">{course}</span>
        </div>
      ))}
    </div>
  );
}

export default Progress;