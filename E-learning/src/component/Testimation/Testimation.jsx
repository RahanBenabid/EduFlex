import React from 'react';
import './Testimation.css';
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

const Testimation = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section className='test'>
      <Container className=''>
        <Row className='B' >
          <Col lg="10" md="12" className="m-auto">
            <div className="terminalTitle ">
              <div className="testimonial__img ">
                <img src="Capture d'écran 2024-03-22 162109.png" alt="" className="" />
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
                      I've been using this website for learning web development , and I couldn't be happier with the experience.
                     The courses are well-structured,<br /> the instructors are knowledgeable, and the platform<br /> is user-friendly. 
                        
                      </p>

                      <div className="student__info ">
                        <h6 className="">Jhon Doe</h6>
                        <p>California, United State</p>
                        <div className="star">
                          <img src="icons8-star-48.png" /> <img src="icons8-star-48.png" /> <img src="icons8-star-48.png" /> <img src="icons8-star-48.png" /> <img src="icons8-star-48 (1).png" />

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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                        Facilis saepe id voluptas molestiae. <br />Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info ">
                        <h6 className="">Jhon Doe</h6>
                        <p>California, United State</p>
                        <div className="star">
                          <img src="icons8-star-48.png" /> <img src="icons8-star-48.png" /> <img src="icons8-star-48.png" /> <img src="icons8-star-48.png" /> <img src="icons8-star-48 (1).png" />

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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                        Facilis saepe id voluptas molestiae. <br />Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info ">
                        <h6 className="">Jhon Doe</h6>
                        <p>California, United State</p>
                        <div className='star'>
                          <img src="icons8-star-48.png" /> <img src="icons8-star-48.png" /> <img src="icons8-star-48.png" /> <img src="icons8-star-48.png" /> <img src="icons8-star-48 (1).png" />
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
    </section>

    // <section className="welcome" id="about">

    // <center><h3 className="hub-heading"> ~ Luxury & Quality ~</h3> </center>
    // <div class="box-container">
    //     <div className="box">
    //         <div className="image">
    //          <img src="seo.png" alt="" /> 
    //         </div>
    //         <div className="content">
    //             <h3>PROFESSIONAL LEVEL</h3>
    //             <p> nor again is there anyone who loves or pursure or desires to optain pain of itself,because
    //                 it is pain, but because occasionally circumstances occur.
    //             </p>
    //             <a href="#" class="btn">Read More</a>
    //         </div>
    //     </div>

    //     <div className="box">
    //         <div className="image">
    //           <img src="seo.png" alt="" />
    //         </div>
    //         <div className="content">
    //             <h3>FRESH FOOD GUARANTEED</h3>
    //             <p> nor again is there anyone who loves or pursure or desires to optain pain of itself,because
    //                 it is pain, but because occasionally circumstances occur.
    //             </p>
    //             <a href="#" class="btn">Read More</a>
    //         </div>
    //     </div>

    //     <div className="box">
    //         <div className="image">
    //          <img src="seo.png" alt="" />  
    //         </div>
    //         <div className="content">
    //             <h3>THE MENU IS PLENTIFUIL</h3>
    //             <p> nor again is there anyone who loves or pursure or desires to optain pain of itself,because
    //                 it is pain, but because occasionally circumstances occur.
    //             </p>
    //             <a href="#" class="btn">Read More</a>
    //         </div>
    //     </div>

    // </div>

    // </section>

  );
}
export default Testimation;