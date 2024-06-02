import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Disp.module.css';

const Disp = () => {
  const [courses, setCourses] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userObject = JSON.parse(localStorage.getItem('user'));
    const userId = userObject?._id;
    setUserId(userId);

    if (userId) {
      axios
        .get(`http://localhost:3000/course/courses/${userId}`)
        .then((response) => {
          const data = response.data;
          if (Array.isArray(data)) {
            setCourses(data);
          } else {
            console.error('Expected an array but received:', data);
            setCourses([]);
          }
        })
        .catch((error) => {
          console.error('Error fetching courses:', error);
          setCourses([]);
        });
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Courses</h1>
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.name} className={styles.course}>
            <h2 className={styles.courseTitle}>{course.title}</h2>
            <p className={styles.courseDescription}>{course.description}</p>
            <p className={styles.courseFileSize}>File Size: {course.fileSize}</p>
            <embed
              src={`data:application/pdf;base64,${course.fileData}`}
              type="application/pdf"
              width="100%"
              height="600px"
              className={styles.coursePdf}
            />
          </div>
        ))
      ) : (
        <p className={styles.noCourses}>No courses found. {userId}</p>
      )}
    </div>
  );
};

export default Disp;