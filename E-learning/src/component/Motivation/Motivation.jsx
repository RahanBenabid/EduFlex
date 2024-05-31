import React from "react";
import './Motivation.css';



function Motivation() {
    return (<section id="motiv" className="Motivation-wrapper flexColEnd">
        <div className="mhome-container">
            <div className="home-right2">
                <img src="photo3.png" />

            </div>
            <div className="home-left">
                <div className="motivation-title">
                    <h1>Benifits From Our Online <br />Learning</h1>
                </div>
                <div className="msecondary-text">
                    <p id="tit"> <img src="i1.PNG" className="ic" />Online Degrees</p>
                    <div className="bar-Text">
                        <p id="cic">Earn occredited degrees from the comfort of your home.<br /> opening doors to a world of possibilities.</p>
                    </div>
                </div>
                <div className="msecondary-text">
                    <p id="tit"> <img src="i2.PNG" className="ic" />Short Courses</p>
                    <div className="bar-Text">
                        <p id="cic">Enhance your skills with our concise and focused short  <br /> courses, designed for quick and effective learning.</p>
                    </div>

                </div>

                <div className="msecondary-text">
                    <p id="tit"> <img src="i3.PNG" className="ic" />Training From Experts</p>
                    <div className="bar-Text">
                        <p id="cic">Immerse yourself in knowledge with industry experts<br /> guiding you through hands-on expercience</p>
                    </div>

                </div>
                <div className="msecondary-text">
                <p id="tit"> <img src="i4.PNG" className="ic" />1.5k+ Video Courses</p>
                    <div className="bar-Text">
                        <p id="cic">Dive into a vast library of over 1.5k video courses covering <br />many subjects, offering a visual learning experience.</p>
                    </div>

                </div>



            </div>


        </div>

    </section>
    );
}
export default Motivation;