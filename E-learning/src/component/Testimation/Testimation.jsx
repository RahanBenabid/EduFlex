import React from 'react';
import './Testimation.css';
import {Container, Row, Col} from "reactstrap";
import Slider from "react-slick";

const Testimation = () => {
    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1
    };
    return (
        <Container className='test'>
            <Row className='B'>
                <Col lg="10" md="12">
                    <div className="terminalTitle ">

                        <div className="testimonial__img ">
                            <img src="testimation.png" alt="error" className=""/>
                        </div>

                        <div className="testimonial__content ">
                            <h2 className="T-titre">Our Students Voice</h2>

                            <Slider {...settings}>
                                <div>
                                    <div className="single__testimonial">
                                        <h6 className="sub-title">
                                            Excellent course of materials
                                        </h6>
                                        <p>
                                            I've been using this website for learning web development , and I couldn't be
                                            happier with the experience. The courses are well-structured,<br/>
                                            the instructors are knowledgeable, and the platform<br/>
                                            is user-friendly.

                                        </p>

                                        <div className="student__info ">
                                            <h6 className="">Jhon Doe</h6>
                                            <p>California, United State</p>
                                            <div className="star star_test">
                                                <img src="icons8-star-48.png"/>
                                                <img src="icons8-star-48.png"/>
                                                <img src="icons8-star-48.png"/>
                                                <img src="icons8-star-48.png"/>
                                                <img src="icons8-star-48 (1).png"/>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="single__testimonial">
                                        <h6 className="sub-title">
                                            Excellent course of materials
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                                            Facilis saepe id voluptas molestiae.
                                            <br/>Aperiam corrupti voluptas earum at molestiae neque!
                                        </p>

                                        <div className="student__info ">
                                            <h6 className="">Jhon Doe</h6>
                                            <p>California, United State</p>
                                            <div className="star star_test">
                                                <img src="icons8-star-48.png"/>
                                                <img src="icons8-star-48.png"/>
                                                <img src="icons8-star-48.png"/>
                                                <img src="icons8-star-48.png"/>
                                                <img src="icons8-star-48 (1).png"/>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="single__testimonial">
                                        <h6 className="sub-title">
                                            Excellent course of materials
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                                            Facilis saepe id voluptas molestiae.
                                            <br/>Aperiam corrupti voluptas earum at molestiae neque!
                                        </p>

                                        <div className="student__info ">
                                            <h6 className="">Jhon Doe</h6>
                                            <p>California, United State</p>
                                            <div className='star star_test'>
                                                <img src="icons8-star-48.png"/>
                                                <img src="icons8-star-48.png"/>
                                                <img src="icons8-star-48.png"/>
                                                <img src="icons8-star-48.png"/>
                                                <img src="icons8-star-48 (1).png"/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Testimation;