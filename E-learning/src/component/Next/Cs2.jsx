import React, { useEffect, useState } from "react";
import "./Next.css";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Header from "../Header";
import data from "../../util/cs2.json";
import "swiper/css";
import { sliderSettings } from "../../util/commob";
import Marker from "../../component/Marker/Marker";
function Cs2() {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);
  const externalSource = "https://www.youtube.com/watch?v=jS4aFq5-91M";
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseTitle = "Cyber Security";
        const response = await fetch(
          `http://localhost:3000/onlineCourse/course?courseTitle=${courseTitle}`
        );
        const data = await response.json();
        if (data.length > 0) {
          setCourse(data[0]);
        } else {
          setIsCreatingCourse(true);
        }
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
      const response = await fetch("http://localhost:3000/onlineCourse/onlineCourses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseName: courseTitle, courseDescription }),
      });
      if (response.ok) {
        const data = await response.json();
        setCourse(data.course);
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
  if (isCreatingCourse) {
    return (
      <div>
      <p>Course not found. Do you want to create a new course?</p>
      <button onClick={handleCreateCourse}>Create Course</button>
      </div>
    );
  }
  if (course) {
return (
<>
<div className="h">
  <Header />
  </div>
  <div className="Code-wrapper co">
    <a>Network</a>
    <a>Cyber Secuity</a>
    <a>artificial intelligence</a>
    <a>Web Development</a>
  </div>
  <section className="r-container">
    <div className="dev">
      <h2>{course.courseName}</h2>
      <div className="star">
        <p>Self-Paced Course |</p>
        <img src="icons8-étoile-50.png" alt="" />
        <img src="icons8-étoile-50.png" alt="" />
        <img src="icons8-étoile-50.png" alt="" />
        <img src="icons8-étoile-50.png" alt="" />
        <img src="icons8-étoile-50.png" alt="" />
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
          <h6> {course.courseDescription} </h6>
          <div className="beginner">
            <h6>Beginner To Advance</h6>
            <h6>10 weeks</h6>
          </div>
          <a href="cybersecuirty.pdf" download="cybersecuirty.pdf">
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
            <h4>Embark on a thrilling journey into the realm of cyber security with our dynamic course,
            "Cyber Security Essentials: From Fundamentals to Real-World Defense"! 🛡️<br /> Uncover the  critical
            importance of cyber security in<br /> today's digital landscape as you acquire the  skills and <br />
            knowledge needed to protect against cyber threats<br /> and safeguard sensitive information. 💻</h4>
            
            
          </div>
          
          <ul className="list">
            
            <li>Foundational Cyber Security Concepts: Learn essential data structures, algorithms<br /> and advanced techniques for optimized coding.</li>
            
            <li>Security Technologies and Tools Dive into fundamental concepts of cyber security, including threat landscape analysis, risk  <br />management, and security policies and procedures.</li>
            <li>Practical Hands-On Exercises: Explore a variety of security technologies and tools used in cyber defense, including  <br /> security.</li>
            <li>Specialization Tracks: Choose full-stack development or specialize<br /> firewalls, intrusion detection systems (IDS), antivirus software, and encryption techniques.</li>
            <li>Expert Mentorship and Guidance: Receive guidance and insights from industry experts and experienced cyber security <br />professionals.        </li>
          </ul>
        </div>
        <img src="chanwi.jpg" />
        
      </div>
      
      
    </div>
    
    <div className="d">
      <div className="course-text">
        <h3> Course Content</h3>
        <div className="jas">
          
          <ul className="contenu mmmmm">
            <li>Understanding Cyber Security Landscape<br />
              <span id="sp"> Gain insights into the evolving cyber security landscape, including common threats, attack vectors, and recent trends.<br /> Explore the impact of cyber attacks on individuals, organizations, and society. </span>
            </li>
            <li>Foundations of Information Security<br />
              <span id="sp">Learn about the core principles of information security, including confidentiality, integrity, and availability (CIA)<br />
              </span></li>
              <li>Security Technologies and Tools <br />
                <span id="sp"> Explore a variety of security technologies and tools used in cyber defense, such as firewalls, intrusion detection systems (IDS),<br />
                antivirus software, and encryption techniques.</span></li>
                <li>Threat Intelligence and Incident Response<br />
                  <span id="sp">  Dive into the world of threat intelligence and incident response,<br />
                  learning how to detect, analyze, and respond to security incidents effectively.</span></li>
                  <li>Cyber Security Best Practices<br />
                    <span id="sp"> Discover industry best practices for securing networks, systems, and applications against cyber threats. </span>
                  </li>
                </ul>
                <Swiper {...sliderSettings}>
                
                
                
                {data.map((card, i) => (
                
                <SwiperSlide key={i}>
                
                
                <div className=" r-card php">
                  
                  <img src={card.image} alt="home" />
                  
                  
                </div>
                
                </SwiperSlide>
                
                
                ))}
                
                </Swiper>
              </div>
            </div>
            <Marker></Marker>
          </div>
          <div className="course-text1"> <h3>Course Instructor</h3></div>
          <div className="prof">
            
            <div className="prof-photo">
              <img src="pro.jpg" alt="" />
            </div>
            <div className="contenu-prof">
              <h4 id="sandeep">Sandeep Jain</h4>
              <br />
              <h5 id="founder">Founder & CEO at EduFlex</h5>
              <div className="prof-text">
                <p>Mr. Sandeep Jain graduated from Dr. Abdul Kalam Technical University with a B.Tech in <br />
                  Computer Science and Engineering. He completed his Master's degree from IIT-Roorkee and <br />
                  has worked as a full-time Software Developer at D.E. Shaw & Co. His passion for teaching led <br />
                  him to join JIIT Noida as an Assistant Professor. He has mentored over 20,000+ students <br />
                  
                  He started GeeksforGeeks in 2009 as a blog, to compile resources on programming, <br />
                  algorithms, and interview preparation. He has curated and mentored the Data Structures and <br />
                  Algorithms - Self-Paced course on GeeksforGeeks, helping thousands of students land their <br />
                dream jobs.</p>
                <div className="ass">
                  <h5 >Associated Batches:</h5>
                  <h6>Master CPP - 390 Special April</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
        );
        }
  return <div>Something went wrong.</div>;
}
export default Cs2;
  export const SliderButtons = () => {
    const swipe = useSwiper();
    return (
      <div className="flexStart r-button">
      <button onClick={() => swipe.slidePrev()}>Previous</button>
      <button onClick={() => swipe.slideNext()}>Next</button>
      </div>
    );
  };