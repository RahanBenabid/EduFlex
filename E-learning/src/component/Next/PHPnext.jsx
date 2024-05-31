import React from "react";
import "./Next.css"
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Header from "../Header";
import data from "../../util/phpslider.json";
import "swiper/css";
import Marker from "../../component/Marker/Marker"
import { sliderSettings } from "../../util/commob";
function PHPnext() {

    const externalSourse = 'https://www.youtube.com/watch?v=6EukZDFE_Zg';

    return (<>

        <div className="h"><Header /></div>


        <div className="Code-wrapper">
            <a>Python</a>
            <a>JavaScript</a>
            <a>MySql</a>
            <a>Html</a>
            <a>CSS</a>
            <a>NodeJs</a>
            <a>PHP</a>
            <a>ReactJs</a>
            <a>Djongo</a>
            <a>Java</a>
            <a>C++</a>
        </div>

        <section className="r-container">


            <div className="dev">
                <h2>Full Stack Development with PHP for the backend</h2>
                <div className="star"><p>Self-Paced Course |</p><img src="icons8-étoile-50.png" alt="" />
                    <img src="icons8-étoile-50.png" alt="" /><img src="icons8-étoile-50.png" alt="" />
                    <img src="icons8-étoile-50.png" alt="" /><img src="icons8-étoile-50.png" alt="" />
                    <p id="pa">4.7/5 ratings</p></div>
                <div className="video">
                    <ReactPlayer url={externalSourse}
                        controls
                        playing
                        muted
                        width={"650px"}
                        height={"450px"}

                    />
                    <div className="description">
                        <h3>Course Description</h3>
                        <h6>Looking to become a full-stack developer? This video, online course <br />with a focus on the
                             front-end and PHP <br />for back-end along with APIs and
                            deployment is a must-have program <br />for any aspiring developer.  </h6>
                        <div className="beginner">
                            <h6>Beginner To Advance</h6>
                            <h6>10 weeks</h6>

                        </div>
                        <a href="javascript.pdf" download="javascript.pdf">
                            <div className="dow">
                                <button alt="Download Course" >
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
                            <h4>Embark on an extraordinary coding odyssey with our groundbreaking<br /> course, "DSA to Development-
                                Complete Coding Guide"! 🌟 Discover<br /> the transformative power of mastering Data Structures and<br />
                                Algorithms (DSA) as you venture towards becoming <br />a Proficient Developer or Data Scientist. 💻</h4>


                        </div>

                        <ul className="list">

                            <li>Comprehensive DSA Mastery: Learn essential data structures, algorithms<br /> and advanced techniques for optimized coding.</li>

                            <li>Programming Proficiency: Develop a strong foundation in programming <br />languages to tackle coding challenges with confidence.</li>
                            <li>Real-World Application: Engage in hands-on projects and build remarkable<br /> applications to apply your skills.</li>
                            <li>Versatility in Tech Stacks: Choose full-stack development or specialize<br /> in specific technology stacks like MERN, Java, Python or Machine Learning.</li>
                            <li>Expert Mentoring: Gain valuable insights and guidance from industry<br /> professionals and mentors.</li>
                        </ul>
                    </div>
                    <img src="chanwi.jpg" />

                </div>


            </div>

            <div className="d">
                <div className="course-text">
                    <h3> Course Content</h3>
                    <div className="jas">

                        <ul className="contenu j">
                            <li>Introduction to PHP<br />
                                <span id="sp">In this chapter, you'll learn about the basics of PHP, including its history, features, and use cases. You'll also set up your development environment and write your first PHP script.
                                </span>
                            </li>
                            <li>Variables, Data Types, and Operators <br />
                                <span id="sp"> Explore PHP's built-in data types, such as strings, integers, floats, booleans, and arrays. Learn how to declare and manipulate variables, as well as understand the various operators available .<br />
                                </span></li>
                            <li>Control Structures and Functions <br />
                                <span id="sp"> Dive into conditional statements (if, else, switch) and loops (for, while, do-while) to control the flow of your PHP scripts. You'll also learn how to define and use functions, which are essential for modular programming.</span></li>
                            <li>Working with Forms and URLs <br />
                                <span id="sp">This chapter covers handling form data submitted from HTML forms and retrieving data from URLs using PHP's built-in superglobal variables ($_GET, $_POST, $_REQUEST).</span></li>
                            <li>Databases and MySQL<br />
                                <span id="sp">  Discover how to interact with databases using PHP's database extensions, such as MySQLi or PDO. You'll learn how to connect to a database, execute queries (SELECT, INSERT, UPDATE, DELETE), and handle result sets.
                                </span>
                            </li>
                        </ul>
                        <Swiper {...sliderSettings}>

                            <SliderButtons />

                            {data.map((card, i) => (

                                <SwiperSlide key={i}>


                                    <div className=" r-card php">

                                        <img src={card.image} alt="home" />
                                        <span className="r-price secondaryText">

                                        </span>

                                    </div>

                                </SwiperSlide>


                            ))}

                        </Swiper>
                    </div>
                </div>

            </div>
            <Marker></Marker>
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




        </section >

    </>
    )

}
export default PHPnext;
export const SliderButtons = () => {
    const swipe = useSwiper();
    return (
        <div className="flexStart r-button">
            <button onClick={() => swipe.slidePrev()}>Previous</button>
            <button onClick={() => swipe.slideNext()}>Next</button>
        </div >
    )
}
