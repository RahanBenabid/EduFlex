import React, { useState, useEffect } from 'react';
import './Marker.css';
import axios from 'axios';

const Marker = ({ title, description, courseId, userId }) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    checkCourseCompletion();
  }, []);

  const checkCourseCompletion = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/onlineCourse/checkCourse?userId=${userId}&courseId=${courseId}`);
      setCompleted(response.data.isCourseCompleted);
    } catch (error) {
      console.error('Error checking course completion:', error);
    }
  };

  const toggleCompletion = async () => {
    try {
      if (!completed) {
        // If the course is being marked as completed, add the course ID to the user's completedCourses array
        await axios.put(`http://localhost:3000/onlineCourse/addCourse?userId=${userId}&courseId=${courseId}`);
      } else {
        // If the course is being marked as incomplete, remove the course ID from the user's completedCourses array
        await axios.delete(`http://localhost:3000/onlineCourse/removeCourse?userId=${userId}&courseId=${courseId}`);
      }
      setCompleted(!completed);
    } catch (error) {
      console.error('Error updating user\'s completed courses:', error);
    }
  };

  return (
    <div className={`course-module ${completed ? 'completed' : ''}`}>
      <div className="module-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button onClick={toggleCompletion} className="completion-btn">
        <h3>{completed ? 'Marquer comme non complété' : 'Marquer comme complété'}</h3>
      </button>
    </div>
  );
};

export default Marker;