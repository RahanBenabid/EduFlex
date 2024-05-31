import React from "react";
import "./Next.css"
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Header from "../Header";
import data from "../../util/cslider.json";
import "swiper/css";
import { sliderSettings } from "../../util/commob";
import Marker from "../../component/Marker/Marker"
function C() {

    const externalSourse = 'https://www.youtube.com/watch?v=8jLOx1hD3_o';

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
                <h2>Full Stack Development with React & Node JS</h2>
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
                            polpular JS library React for front-end and Node.js <br />for back-end along with APIs and
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

                        <ul className="contenu ccc">
                            <li>Introduction to C<br />
                                <span id="sp">Introduction to C Programming: In this chapter, you'll learn about the basics of the C programming language, including its history, features, and use cases. You'll also set up your development environment and write your first C program.
                                </span>
                            </li>
                            <li>Data Types, Variables, and Operators<br />
                                <span id="sp">Explore the different data types available in C, such as integers, floats, and characters. Learn how to declare and manipulate variables, as well as understand the various arithmetic, relational, and logical operators.
                                    <br />
                                </span></li>
                            <li>File Handling and Input/Output Operations<br />
                                <span id="sp"> In this chapter, you'll learn how to read from and write to files using various input/output functions in C. You'll also explore other I/O operations, such as working with standard input and output streams.
                                </span></li>
                                <li>Lists and Tables<br />
                                <span id="sp">This chapter covers the creation of ordered and unordered lists, as well as the use of tables to present tabular data in a structured manner. You'll learn about table elements, rows, columns, and cell formatting.
                                </span>
                            </li>
                            <li>Introduction to C++ <br />
                                <span id="sp"> Transition from C to C++, which is an extension of the C programming language. You'll learn about the new features introduced in C++, such as object-oriented programming concepts (classes, objects, inheritance, and polymorphism), templates, and the Standard Template Library (STL).</span></li>
                           
                        </ul>
                        <Swiper {...sliderSettings}>

                            {/* <SliderButtons /> */}

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




        </section >

    </>
    )

}
export default C;
export const SliderButtons = () => {
    const swipe = useSwiper();
    return (
        <div className="flexStart r-button">
            <button onClick={() => swipe.slidePrev()}>Previous</button>
            <button onClick={() => swipe.slideNext()}>Next</button>
        </div >
    )
}
