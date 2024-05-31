import React from "react";
import "./Next.css"
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Header from "../Header";
import Marker from "../../component/Marker/Marker"
import data from "../../util/ui.json";
import "swiper/css";
import { sliderSettings } from "../../util/commob";
function Next() {

    const externalSourse = 'https://www.youtube.com/watch?v=RqCJRrseD1k';

    return (<>

        <div className="h"><Header /></div>


        <div className="Code-wrapper co">
            <a>Network</a>
            <a>Cyber Cecuity</a>
            <a>artificial intelligence</a>
            <a>Web Development</a>
        </div>

        <section className="r-container">


            <div className="dev">
                <h2>UI/UX Course for Beginner 2024</h2>
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
                        <h6>Are you aiming to excel as a UI/UX designer? Look no further than this<br /> essential video
                            or online course, meticulously crafted to empower<br /> aspiring designers with the skills
                            and knowledge needed to thrive <br />in the industry.  </h6>

                        <div className="beginner">
                            <h6>Beginner To Advance</h6>
                            <h6>10 weeks</h6>

                        </div>
                        <a href="97-ux-designer.pdf" download="97-ux-designer.pdf">
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
                            <li>User-Centric Design Principles: Master the fundamentals of designing intuitive and user-friendly interfaces.</li>
                            <li>Visual Aesthetics: Develop an eye for design and learn how to create visually appealing layouts and graphics.</li>
                            <li>Interactive Prototyping: Engage in hands-on projects to prototype and test interactive designs for seamless user experiences.</li>
                            <li>Tool Proficiency: Gain expertise in industry-standard design tools such as Adobe XD, Sketch, or Figma.</li>
                            <li>Expert Feedback: Receive constructive criticism and guidance from experienced designers and mentors to refine your skills.</li>
                        </ul>
                    </div>
                    <img src="chanwi.jpg" />

                </div>


            </div>

            <div className="d">
                <div className="course-text">
                    <h3> Course Content</h3>
                    <div className="jas ">

                        <ul className="contenu mm">
                            <li>User-Centric Design Principles: Master the fundamentals of designing intuitive and user-friendly interfaces.<br />
                                <span id="sp">Learn about the importance of user-centric design and how it influences the creation of interfaces that prioritize user experience.</span>
                            </li>
                            <li>Visual Aesthetics: Develop an eye for design and learn how to create visually appealing layouts and graphics.<br />
                                <span id="sp">Explore principles of visual design, including color theory, typography, and layout techniques, to create aesthetically pleasing user interfaces.</span>
                            </li>
                            <li>Interactive Prototyping: Engage in hands-on projects to prototype and test interactive designs for seamless user experiences.<br />
                                <span id="sp">Practice prototyping tools and techniques to create interactive mockups and prototypes, allowing for user testing and feedback early in the design process.</span>
                            </li>
                            <li>Tool Proficiency: Gain expertise in industry-standard design tools such as Adobe XD, Sketch, or Figma.<br />
                                <span id="sp">Master the use of popular design tools to create high-fidelity designs, collaborate with team members, and efficiently iterate on design concepts.</span>
                            </li>

                        </ul>
                        <Swiper {...sliderSettings}>



                            {data.map((card, i) => (

                                <SwiperSlide key={i}>


                                    <div className="r-card php">

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




        </section >

    </>
    )

}
export default Next;
export const SliderButtons = () => {
    const swipe = useSwiper();
    return (
        <div className="flexStart r-button">
            <button onClick={() => swipe.slidePrev()}>Previous</button>
            <button onClick={() => swipe.slideNext()}>Next</button>
        </div >
    )
}
