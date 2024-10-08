import React, { useEffect, useState } from "react";
import "./Next.css";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "../Header";
import data from "../../util/sqlslider.json";
import { sliderSettings } from "../../util/commob";
import Marker from "../../component/Marker/Marker";
import axios from "axios";

function S() {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const externalSource = "https://www.youtube.com/watch?v=SycDH3NSJUU";
  
  const userObject = JSON.parse(localStorage.getItem('user'));
  const userId = userObject?._id;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseTitle = "SQL";
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
                <ul className="contenu mmmmm">
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

export default S;


// import React from "react";
// import "./Next.css"
// import ReactPlayer from "react-player";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import Marker from "../../component/Marker/Marker"
// import Header from "../Header";
// import data from "../../util/sqlslider.json";
// import "swiper/css";
// import { sliderSettings } from "../../util/commob";
// function S() {

//     const externalSourse = 'https://www.youtube.com/watch?v=SycDH3NSJUU';

//     return (<>

//         <div className="h"><Header /></div>


//         <div className="Code-wrapper">
//             <a>Python</a>
//             <a>JavaScript</a>
//             <a>MySql</a>
//             <a>Html</a>
//             <a>CSS</a>
//             <a>NodeJs</a>
//             <a>PHP</a>
//             <a>ReactJs</a>
//             <a>Djongo</a>
//             <a>Java</a>
//             <a>C++</a>
//         </div>

//         <section className="r-container">


//             <div className="dev">
//                 <h2>Full Stack Development with SQL</h2>
//                 <div className="star"><p>Self-Paced Course |</p><img src="icons8-étoile-50.png" alt="" />
//                     <img src="icons8-étoile-50.png" alt="" /><img src="icons8-étoile-50.png" alt="" />
//                     <img src="icons8-étoile-50.png" alt="" /><img src="icons8-étoile-50.png" alt="" />
//                     <p id="pa">4.7/5 ratings</p></div>
//                 <div className="video">
//                     <ReactPlayer url={externalSourse}
//                         controls
//                         playing
//                         muted
//                         width={"650px"}
//                         height={"450px"}

//                     />
//                     <div className="description">
//                         <h3>Course Description</h3>
//                         <h6>Looking to become a full-stack developer? This video, online course <br />with a focus on the
//                             polpular JS library React for front-end and Node.js <br />for back-end along with APIs and
//                             deployment is a must-have program <br />for any aspiring developer.  </h6>
//                         <div className="beginner">
//                             <h6>Beginner To Advance</h6>
//                             <h6>10 weeks</h6>

//                         </div>
//                         <a href="javascript.pdf" download="javascript.pdf">
//                             <div className="dow">
//                                 <button alt="Download Course" >
//                                     <i>D</i>
//                                     <i>o</i>
//                                     <i>w</i>
//                                     <i>n</i>
//                                     <i>l</i>
//                                     <i>o</i>
//                                     <i>a</i>
//                                     <i>d</i>
//                                     <i>&nbsp;</i>
//                                     <i>C</i>
//                                     <i>o</i>
//                                     <i>u</i>
//                                     <i>r</i>
//                                     <i>s</i>
//                                     <i>e</i>

//                                 </button>
//                             </div>
//                         </a>
//                     </div>

//                 </div>
//                 <div className="s">
//                     <div className="ccourse-text">
//                         <h3>About The Course</h3>
//                         <div className="ab">
//                             <h4>Embark on an extraordinary coding odyssey with our groundbreaking<br /> course, "DSA to Development-
//                                 Complete Coding Guide"! 🌟 Discover<br /> the transformative power of mastering Data Structures and<br />
//                                 Algorithms (DSA) as you venture towards becoming <br />a Proficient Developer or Data Scientist. 💻</h4>


//                         </div>

//                         <ul className="list">

//                             <li>Comprehensive DSA Mastery: Learn essential data structures, algorithms<br /> and advanced techniques for optimized coding.</li>

//                             <li>Programming Proficiency: Develop a strong foundation in programming <br />languages to tackle coding challenges with confidence.</li>
//                             <li>Real-World Application: Engage in hands-on projects and build remarkable<br /> applications to apply your skills.</li>
//                             <li>Versatility in Tech Stacks: Choose full-stack development or specialize<br /> in specific technology stacks like MERN, Java, Python or Machine Learning.</li>
//                             <li>Expert Mentoring: Gain valuable insights and guidance from industry<br /> professionals and mentors.</li>
//                         </ul>
//                     </div>
//                     <img src="chanwi.jpg" />

//                 </div>


//             </div>

//             <div className="d">
//                 <div className="course-text">
//                     <h3> Course Content</h3>
//                     <div className="jas">

//                         <ul className="contenu sss">
//                             <li>Introduction to SQL<br />
//                                 <span id="sp"> In this chapter, you'll learn about the basics of Python, including its history, features, and use cases. You'll also set up your development environment and write your first Python program.
//                                 </span>
//                             </li>
//                             <li>File Handling and Exception Handling<br />
//                                 <span id="sp"> In this chapter, you'll learn how to read from and write to files in Python. You'll also explore exception handling techniques to gracefully handle errors and exceptions in your code.
//                                     <br />
//                                 </span></li>
//                             <li>SQL Requet <br />
//                                 <span id="sp">Discover the principles of object-oriented programming (OOP) in Python, including classes, objects, inheritance, encapsulation, and polymorphism. You'll learn how to create and use objects in your programs.</span></li>
//                             <li>Data Processing and Visualization<br />
//                                 <span id="sp">Learn how to work with data in Python using popular libraries like NumPy, Pandas, and Matplotlib. You'll explore techniques for data manipulation, analysis, and visualization, which are essential skills in data science and scientific computing.</span></li>
                           
//                         </ul>
//                         <Swiper {...sliderSettings}>

//                             {/* <SliderButtons /> */}

//                             {data.map((card, i) => (

//                                 <SwiperSlide key={i}>


//                                     <div className=" r-card sq">

//                                         <img src={card.image} alt="home" />
                                 

//                                     </div>

//                                 </SwiperSlide>


//                             ))}

//                         </Swiper>
//                     </div>
//                 </div>
          
//             </div>
//             <div className="course-text1"> <h3>Course Instructor</h3></div>
//             <div className="prof">

//                 <div className="prof-photo">
//                     <img src="pro.jpg" alt="" />
//                 </div>
//                 <div className="contenu-prof">
//                     <h4 id="sandeep">Sandeep Jain</h4>
//                     <br />
//                     <h5 id="founder">Founder & CEO at EduFlex</h5>
//                     <div className="prof-text">
//                         <p>Mr. Sandeep Jain graduated from Dr. Abdul Kalam Technical University with a B.Tech in <br />
//                             Computer Science and Engineering. He completed his Master's degree from IIT-Roorkee and <br />
//                             has worked as a full-time Software Developer at D.E. Shaw & Co. His passion for teaching led <br />
//                             him to join JIIT Noida as an Assistant Professor. He has mentored over 20,000+ students <br />

//                             He started GeeksforGeeks in 2009 as a blog, to compile resources on programming, <br />
//                             algorithms, and interview preparation. He has curated and mentored the Data Structures and <br />
//                             Algorithms - Self-Paced course on GeeksforGeeks, helping thousands of students land their <br />
//                             dream jobs.</p>
//                         <div className="ass">
//                             <h5 >Associated Batches:</h5>
//                             <h6>Master CPP - 390 Special April</h6>
//                         </div>
//                     </div>
//                 </div>
//             </div>




//         </section >

//     </>
//     )

// }
// export default S;
// export const SliderButtons = () => {
//     const swipe = useSwiper();
//     return (
//         <div className="flexStart r-button">
//             <button onClick={() => swipe.slidePrev()}>Previous</button>
//             <button onClick={() => swipe.slideNext()}>Next</button>
//         </div >
//     )
// }
