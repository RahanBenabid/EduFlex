import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import axios from "axios";
import Header from "../Header";
import { sliderSettings } from "../../util/commob";
import Marker from "../../component/Marker/Marker";
import "swiper/css";

function Cs1() {
  const [course, setCourse] = useState(null);
  const externalSource = 'https://www.youtube.com/watch?v=jS4aFq5-91M';

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
            `http://localhost:3000/onlineCourse/course?courseTitle=${courseTitle}`
          );
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };
    fetchCourse();
  }, []);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="h"><Header /></div>

      <div className="Code-wrapper co">
        {/* Your navigation links */}
      </div>

      <section className="r-container">
        <div className="dev">
          <h2>{course.title}</h2>
          <div className="star">
            <p>Self-Paced Course |</p>
            {Array.from({ length: 5 }).map((_, index) => (
              <img key={index} src="icons8-étoile-50.png" alt="" />
            ))}
            <p id="pa">{course.rating}/5 ratings</p>
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
              <h6>{course.description}</h6>
              <div className="beginner">
                <h6>{course.level}</h6>
                <h6>{course.duration}</h6>
              </div>
              <a href={course.downloadLink} download={course.downloadFilename}>
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
                <h4>{course.aboutTitle}</h4>
                <p>{course.aboutContent}</p>
              </div>
              <ul className="list">
                {course.courseAbout.map((item, index) => (
                  <li key={index}>{item.content}</li>
                ))}
              </ul>
            </div>
            <img src={course.image} alt="Course" />
          </div>
        </div>

        <div className="d">
          <div className="course-text">
            <h3> Course Content</h3>
            <div className="jas ">
              <ul className="contenu mmmmm">
                {course.courseContent.map((module, index) => (
                  <li key={index}>
                    {module.title}<br />
                    <span id="sp">{module.description}</span>
                  </li>
                ))}
              </ul>
              <Swiper {...sliderSettings}>
                {course.slides.map((slide, i) => (
                  <SwiperSlide key={i}>
                    <div className=" r-card php">
                      <img src={slide.image} alt="Slide" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <Marker courseId={course._id} userId={course.userId} />
        </div>

        <div className="course-text1"> <h3>Course Instructor</h3></div>
        <div className="prof">
          <div className="prof-photo">
            <img src={course.instructor.photo} alt="Instructor" />
          </div>
          <div className="contenu-prof">
            <h4 id="sandeep">{course.instructor.name}</h4>
            <br />
            <h5 id="founder">{course.instructor.title}</h5>
            <div className="prof-text">
              <p>{course.instructor.bio}</p>
              <div className="ass">
                <h5>Associated Batches:</h5>
                <h6>{course.associatedBatches}</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cs1;

export const SliderButtons = () => {
  const swipe = useSwiper();
  return (
    <div className="flexStart r-button">
      <button onClick={() => swipe.slidePrev()}>Previous</button>
      <button onClick={() => swipe.slideNext()}>Next</button>
    </div>
  );
};
