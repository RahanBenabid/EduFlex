import React from "react"
import slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./course.css"
import {Link} from "react-router-dom"

function Course() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <section className="course" id="course">
            <div className="course-text">
                <h2>Our Popular Courses</h2>
            </div>
            <div className="secondary">
                <h5>Discover our most sought-after courses, carfuly curated to meet the
                    <br/>
                    <span id="span2">demands of today's learners. Dive into engaging content crafted</span>
                    <br/>
                    <span id="span1">for success in evry step of your educational journey.</span>
                </h5>
            </div>

            <div className="course-content">

                <div className="rowing">

                    <Link to="/HTMLnext"><img src="photo_5764824702806769760_x.jpg" alt="" id="im"/></Link>
                    <div className="course">
                        <h5 className="web">Web Design</h5>
                        <h3>Complete HTML CSS JS Course 2024</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.<br/>Lorem, ipsum dolor.</p>
                        <h6>05 hours 15 minutes</h6>
                    </div>
                    <div className="rating">
                        <div className="star">
                            <img src="icons8-star-48.png"/>
                            <img src="icons8-star-48.png"/>
                            <img src="icons8-star-48.png"/>
                            <img src="icons8-star-48.png"/>
                            <img src="icons8-star-48 (1).png"/>

                        </div>

                    </div>

                </div>
                <div className="course-contnent">
                    <div className="rowing">
                        <Link to="/Ui"><img src="photo_5764824702806769761_x.jpg" alt="" id="im"/></Link>
                        <div className="course">
                            <h5 className="web">Web Design</h5>
                            <h3>UX/UI Bootcamp for beginners 2024</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.<br/>Lorem, ipsum dolor.</p>
                            <h6>05 hours 15 minutes</h6>
                        </div>
                        <div className="rating">
                            <div className="star">
                                <img src="icons8-star-48.png"/>
                                <img src="icons8-star-48.png"/>
                                <img src="icons8-star-48.png"/>
                                <img src="icons8-star-48.png"/>
                                <img src="icons8-star-48 (1).png"/>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="course-contnent">
                    <div className="rowing">
                        <Link to="/Data"><img src="photo_5764824702806769758_x.jpg" alt="" id="im"/></Link>
                        <div className="course">
                            <h5 className="web">Web Design</h5>
                            <h3>A Complete Data Analyst Bootcamp
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur.<br/>Lorem, ipsum dolor.</p>
                            <h6>05 hours 15 minutes</h6>
                        </div>
                        <div className="rating">
                            <div className="star">
                                <img src="icons8-star-48.png"/>
                                <img src="icons8-star-48.png"/>
                                <img src="icons8-star-48.png"/>
                                <img src="icons8-star-48.png"/>
                                <img src="icons8-star-48 (1).png"/>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="bhom">
                <Link to="/Coding">
                    <button className="button bhome">Explore More</button>
                </Link>
            </div>
        </section >
    )
}

export default Course;