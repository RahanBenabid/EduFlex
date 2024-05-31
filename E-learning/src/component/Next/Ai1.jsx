import React from "react";
import "./Next.css"
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Header from "../Header";
import ddata from "../../util/Ai1.json";
import "swiper/css";
import { sliderSettings } from "../../util/commob";
import Marker from "../../component/Marker/Marker"
function Ai1() {

    const externalSourse = 'https://www.youtube.com/watch?v=JMUxmLyrhSk';

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
                <h2>The Complete Artificial Intelligence and ChatGPT Course</h2>
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
                        <h6>Welcome to the Comprehensive AI Fundamentals Course! Throughout this course, <br />
                            you'll delve into the technologies that underpin the advancements shaping our<br />
                            world today. We'll explore the foundational principles of artificial intelligence<br />
                            while delving into the latest topics relevant to the field,</h6>

                        <div className="beginner">
                            <h6>Beginner To Advance</h6>
                            <h6>10 weeks</h6>

                        </div>
                        <a href="Ch1-Intro-IA-IFT6261-H-11.pdf" download="Ch1-Intro-IA-IFT6261-H-11.pdf">
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
                            <h4>Embark on an enriching journey into the realm of artificial intelligence<br /> with our
                                comprehensive course, "AI Mastery: From Fundamentals<br /> to Advanced Applications"! 🤖
                                Discover the transformative power<br /> of AI as you delve into its foundational principles,
                                algorithms, and practical applications. 💡</h4>


                        </div>

                        <ul className="list">

                            <li>Foundations of Artificial Intelligence: Explore the fundamental concepts and principles of artificial intelligence.<br />
                                Understand the various branches of AI, including machine learning,<br /> deep learning, and natural language processing.</li>

                            <li>Machine Learning Basics: Dive into the basics of machine learning, including supervised, unsupervised, <br />and reinforcement learning.</li>
                            <li>Deep Learning Fundamentals: Gain insights into deep learning techniques and architectures, such as neural networks,<br /> convolutional neural networks (CNNs), and recurrent neural networks (RNNs).</li>
                            <li>Building AI Models with TensorFlow and Keras:Explore the field of natural language processing (NLP) and its applications in text analysis,<br /> sentiment analysis, and language translation.</li>
                            <li>AI Deployment and Integration: Learn how to deploy AI models into production environments using containerization technologies like Docker.<br /> Integrate AI capabilities into web and mobile applications using APIs and SDKs</li>
                        </ul>
                    </div>
                    <img src="chanwi.jpg" />

                </div>


            </div>

            <div className="d">
                <div className="course-text">
                    <h3> Course Content</h3>
                    <div className="jas ">

                        <ul className="contenu mmmm">
                            <li>Introduction to Artificial Intelligence:<br />
                                <span id="sp"> Overview of AI concepts and applications <br />
                                    Introduction to machine learning and deep learning</span>
                            </li>
                            <li>Machine Learning Basics:<br />
                                <span id="sp"> Understanding supervised and unsupervised learning<br /> Hands-on exercises with common machine learning algorithms</span></li>
                            <li> Deep Learning Fundamentals:<br />
                                <span id="sp">Introduction to neural networks and deep learning
                                    <br /> Building and training deep learning models with TensorFlow and Keras</span>
                            </li>
                            <li>Ethical and Social Implications of AI:<br />
                                <span id="sp"> Examine the ethical considerations and societal implications of artificial intelligence.
                                    <br />Discuss topics such as bias in AI algorithms, privacy concerns, and the impact of automation on society.  </span>
                            </li>

                            <li> Natural Language Processing (NLP): <br />
                                <span id="sp"> Explore the field of natural language processing (NLP) and its
                                    applications in text analysis, sentiment analysis, and language translation.</span>
                            </li>
                        </ul>

                        <Swiper {...sliderSettings}>



                            {ddata.map((card, i) => (

                                <SwiperSlide key={i}>


                                    <div className=" r-card php">

                                        <img src={card.image} alt="home" />


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
export default Ai1;
export const SliderButtons = () => {
    const swipe = useSwiper();
    return (
        <div className="flexStart r-button">
            <button onClick={() => swipe.slidePrev()}>Previous</button>
            <button onClick={() => swipe.slideNext()}>Next</button>
        </div >
    )
}
