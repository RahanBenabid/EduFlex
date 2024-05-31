import React from "react";
import "./Next.css"
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Header from "../Header";
import data from "../../util/Reseau1.json";
import Marker from "../../component/Marker/Marker"
import { Link } from "react-router-dom";
import "swiper/css";
import { sliderSettings } from "../../util/commob";
function Reseau1() {

    const externalSourse = 'https://www.youtube.com/watch?v=OKXlgAPVJ8Y&list=PLm-fXAJYCnC6DMwEv5cLC25BaL7z75YuW';

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
                <h2>The Complete Networking Fundamentals Course. Your CCNA start</h2>
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
                        <h6> Welcome to the Complete Network Fundamentals Course! In this course,<br />you will learn the
                            technologies that keep the world as you know today br <br />connected and running.
                            We cover both the fundamentals of<br /> networking as well as the topic in the
                            new Cisco CCNA 200-301 exam. </h6>


                        <div className="beginner">
                            <h6>Beginner To Advance</h6>
                            <h6>9 weeks</h6>

                        </div>
                        <a href="reseau.pdf" download="reseau.pdf">
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
                            <h4>Embark on an enriching journey into the world of networking with <br />our comprehensive course, "Networking
                                Mastery: From Fundamentals to Real-World Applications." Delve deep into networking concepts, protocols,<br />
                                and technologies, and gain practical experience  <br />through hands-on projects. Whether you aspire to become
                                a network engineer, administrator, or architect, this course <br />equips you with the skills and knowledge
                                needed to excel in the field of networking.💻</h4>


                        </div>

                        <ul className="list">

                            <li>Foundational Networking Concepts: oundational Networking Concepts:Learn essential networking concepts such as OSI model,<br /> TCP/IP protocol suite, network topologies, and architectures.</li>

                            <li>Advanced Protocols and Technologies: Explore advanced networking protocols including BGP, OSPF, and MPLS. <br />Dive into emerging technologies such as SDN (Software-Defined Networking) and NFV (Network Function Virtualization).</li>
                            <li>Hands-On Projects: Engage in hands-on projects that simulate real-world networking scenarios.<br /> Design, configure, and troubleshoot networks using industry-standard tools and technologies.</li>
                            <li>Specialization Tracks: Choose from specialization tracks such as Network Security, Cloud Networking, or Wireless Networking.<br />Deepen your expertise in a specific area of networking based on your interests and career goals. </li>
                            <li>Expert Guidance and Mentorship: Benefit from expert guidance and mentorship provided by experienced networking professionals.<br /> Receive personalized feedback and support to enhance your learning journey.</li>
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
                            <li>Introduction to Networking Fundamentals<br />
                                <span id="sp">In this chapter, you'll learn Overview of computer networks, Introduction to the OSI model and TCP/IP protocol suite,
                                    Understanding network topologies and architectures
                                </span>
                            </li>
                            <li> Network Protocols and Services<br />
                                <span id="sp">Overview of Ethernet standards and protocols, LAN technologies like Ethernet, Wi-Fi and VLANs,Configuring and managing LAN devices .<br />
                                </span></li>
                            <li>Advanced Networking Concepts<br />
                                <span id="sp">Introduction to routing protocols (e.g., RIP, OSPF, BGP)
                                    Understanding switching concepts and VLANs
                                    Configuring routers and switches</span></li>
                            <li>Network Administration and Management <br />
                                <span id="sp">Overview of network management tools (e.g., SNMP, Nmap)
                                    Monitoring and troubleshooting network performance
                                    Introduction to network configuration management</span></li>
                            <li> Cloud Networking<br />
                                <span id="sp"> Understanding cloud networking concepts
                                    Overview of cloud service models (IaaS, PaaS, SaaS)
                                    Configuring and managing networks in the cloud environment
                                </span>
                            </li>
                        </ul>
                        <Swiper {...sliderSettings}>



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
            <div className="quizcon">
                <p> Feel Ready?</p> <Link to="/QuizRs"><span>Test your self</span></Link>
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
export default Reseau1;
export const SliderButtons = () => {
    const swipe = useSwiper();
    return (
        <div className="flexStart r-button">
            <button onClick={() => swipe.slidePrev()}>Previous</button>
            <button onClick={() => swipe.slideNext()}>Next</button>
        </div >
    )
}
