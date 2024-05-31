import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Choose.css";
import ReactPlayer from "react-player";

const Choose = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section className="choose" >
      <Container>
        <Row className="choose-container">
          <Col lg="6" md="6">
            <div className="choose-left">
              <div className="choose-container">
            <div className="choose-left">
                <div className="motivation-title1">
                    <h1>Why Choose EduFlex</h1>
                </div>
                <div className="secondary-text">
                    <p> EduFlex allows learners to study at their own pace, providing them <br/>
                    with the ability to pause, rewind and replay the material until they <br/>fully
                    understand it.</p>
                </div>
                <div className="secondary-text">
                    <p> EduFlex platforms provide learners with access to a vast range of <br/>
                    subject matter experts and experienced professiobals who may <br/>not be 
                    available through traditional learning methods.</p>
                </div>
                <div className="dic">
                <div className="motivation-icone">
                    <p id="p1"> <img src="icons8-vérifié-30.png"/> Industry Expert Mentors</p>
                   
                    
                </div>
                <div className="motivation-icone">
                   
                    <p> <img src="icons8-vérifié-30.png"/> Course Certificate for particular Course</p>

                </div>
                <div className="motivation-icone">
                    
                    <p> <img src="icons8-vérifié-30.png"/> Across Various Topic and Industries </p>
                    
                </div>
                </div>
               

            </div>
        
        </div>

            </div>
          </Col>

          <Col lg="6" >
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/nJTsbZojero"
                  controls
                  width="650px"
                  height="400px"
                  
        
                />
              ) : (
                <img src="why-choose-us.png" alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <img src="play-circle-line (3).png" alt="" className="icone"onClick={() => setShowVideo(!showVideo)}/>
                  {/* <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i> */}
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Choose;