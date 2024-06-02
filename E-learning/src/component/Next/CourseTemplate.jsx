import React, { useEffect, useState } from "react";
import "./Next.css";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Header from "../Header";
import data from "../../util/cs2.json";
import { sliderSettings } from "../../util/commob";
import Marker from "../../component/Marker/Marker";
import axios from 'axios';

function CourseTemplate() {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //const [isCreatingCourse, setIsCreatingCourse] = useState(false);
  const externalSource = "https://www.youtube.com/watch?v=jS4aFq5-91M";

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseTitle = "Cyber";
        const response = await axios.get(`http://localhost:3000/onlineCourse/course?courseTitle=${courseTitle}`);
        console.log('Response:', response.data); // Debug log
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourse();
  }, []);

  const handleCreateCourse = async () => {
    try {
      const courseTitle = "Cyber Security";
      const courseDescription = "Learn to hack lmao.";
      const response = await axios.post("http://localhost:3000/onlineCourse/onlineCourses", {
        courseName: courseTitle,
        courseDescription
      });
      if (response.status === 200) {
        console.log('Course created:', response.data); // Debug log
        setCourse(response.data.course);
        setIsCreatingCourse(false);
      } else {
        console.error("Failed to create course");
      }
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="Code-wrapper co">
        <a>Network</a>
        <a>Cyber Security</a>
        <a>Artificial Intelligence</a>
        <a>Web Development</a>
      </div>
      <section className="r-container">
        <div className="dev">
          <h2>{course.courseName}</h2>
          <div className="star">
            <p>Self-Paced Course |</p>
            <img src="icons8-étoile-50.png" alt="star" />
            <img src="icons8-étoile-50.png" alt="star" />
            <img src="icons8-étoile-50.png" alt="star" />
            <img src="icons8-étoile-50.png" alt="star" />
            <img src="icons8-étoile-50.png" alt="star" />
            <p id="pa">4.7/5 ratings</p>
          </div>
          <div className="video">
            <ReactPlayer
              url={externalSource}
              controls
              playing
              muted
              width={"650px"}
              height={"450px"}
            />
            <div className="description">
              <h3>Course Description</h3>
              <h6>{course.courseDescription}</h6>
              <div className="beginner">
                <h6>Beginner To Advance</h6>
                <h6>10 weeks</h6>
              </div>
              <a href="cybersecurity.pdf" download="cybersecurity.pdf">
                <div className="dow">
                  <button alt="Download Course">Download Course</button>
                </div>
              </a>
            </div>

          </div>
          <div className="s">
            <div className="ccourse-text">
              <h3>About The Course</h3>
              <ul className="list">
                {course.courseAbout.map((course, index) => (
                  <li key={index}>
                    {course.content}
                  </li>
                ))}
              </ul>
            </div>
            <img src="chanwi.jpg" alt="Course" />
          </div>
          <div className="d">
            <div className="course-text">
              <h3>Course Content</h3>
              <div className="jas">
                <ul className="contenu mmmmm">
                  {course.courseContent.map((course, index) => (
                    <li key={index}>
                      {course.content}
                    </li>
                  ))}
                </ul>
                <Swiper {...sliderSettings}>
                  {data.map((card, i) => (
                    <SwiperSlide key={i}>
                      <div className="r-card php">
                        <img src={card.image} alt="Slide" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <Marker />
          </div>
          <div className="course-text1">
            <h3>Course Instructor</h3>
          </div>
          <div className="prof">
            <div className="prof-photo">
              <img src="pro.jpg" alt="Instructor" />
            </div>
            <div className="contenu-prof">
              <h4 id="sandeep">Sandeep Jain</h4>
              <br />
              <h5 id="founder">Founder & CEO at EduFlex</h5>
              <div className="prof-text">
                <p>
                  Mr. Sandeep Jain graduated from Dr. Abdul Kalam Technical University with a B.Tech in Computer Science and Engineering. He completed his Master's degree from IIT-Roorkee and has worked as a full-time Software Developer at D.E. Shaw & Co. His passion for teaching led him to join JIIT Noida as an Assistant Professor. He has mentored over 20,000+ students. He started GeeksforGeeks in 2009 as a blog, to compile resources on programming, algorithms, and interview preparation. He has curated and mentored the Data Structures and Algorithms - Self-Paced course on GeeksforGeeks, helping thousands of students land their dream jobs.
                </p>
                <div className="ass">
                  <h5>Associated Batches:</h5>
                  <h6>Master CPP - 390 Special April</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseTemplate;

export const SliderButtons = () => {
  const swipe = useSwiper();
  return (
    <div className="flexStart r-button">
      <button onClick={() => swipe.slidePrev()}>Previous</button>
      <button onClick={() => swipe.slideNext()}>Next</button>
    </div>
  );
};
