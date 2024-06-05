import React, { useEffect, useState } from "react";
import "./Next.css";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "../Header";
import data from "../../util/slider.json";
import { sliderSettings } from "../../util/commob";
import Marker from "../../component/Marker/Marker";
import axios from "axios";

function CourseTemplate() {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const externalSource = "https://www.youtube.com/watch?v=jS4aFq5-91M";
  
  const userObject = JSON.parse(localStorage.getItem('user'));
  const userId = userObject?._id;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseTitle = "Great beginning to enter the world of programming";
        const response = await axios.get(
          `http://localhost:3000/onlineCourse/course?courseTitle=${courseTitle}`
        );
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourse();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header className="headlol"/>
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
            <img src="etoile.png" alt="star" />
            <img src="etoile.png" alt="star" />
            <img src="etoile.png" alt="star" />
            <img src="etoile.png" alt="star" />
            <img src="etoile.png" alt="star" />
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
              <a href="javascript.pdf" download="javascript.pdf">
                <div className="dow">
                  <button alt="Download Course">
                    <i>D</i>
                    <i>o</i>
                    <i>w</i>
                    <i>n</i>
                    <i>l</i>
                    <i>o</i>
                    <i>a</i>
                    <i>d</i>
                    <i>&nbsp;</i>
                    <i>C</i>
                    <i>o</i>
                    <i>u</i>
                    <i>r</i>
                    <i>s</i>
                    <i>e</i>
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div className="s">
            <div className="ccourse-text">
              <h3>About The Course</h3>
              <div className="ab">
                <h4>{course.courseDescriptionTitle}</h4>
              </div>
              <ul className="list">
                {course.courseAbout.map((item, index) => (
                  <li key={index}>{item.content}</li>
                ))}
              </ul>
            </div>
            <img src="chanwi.jpg" alt="Course" />
          </div>
          <div className="d">
            <div className="course-text">
              <h3>Course Content</h3>
              <div className="jas">
                <ul className="contenu">
                  {course.courseContent.map((module, index) => (
                    <li key={index}>
                      {module.content}
                      <br />
                      <span id="sp">{course.underCourseContent[index]}</span>
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
            <Marker courseId={course._id} userId={userId} />
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
                  Mr. Sandeep Jain graduated from Dr. Abdul Kalam Technical
                  University with a B.Tech in Computer Science and Engineering.
                  He completed his Master's degree from IIT-Roorkee and has
                  worked as a full-time Software Developer at D.E. Shaw & Co.
                  His passion for teaching led him to join JIIT Noida as an
                  Assistant Professor. He has mentored over 20,000+ students. He
                  started GeeksforGeeks in 2009 as a blog, to compile resources
                  on programming, algorithms, and interview preparation. He has
                  curated and mentored the Data Structures and Algorithms -
                  Self-Paced course on GeeksforGeeks, helping thousands of
                  students land their dream jobs.
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