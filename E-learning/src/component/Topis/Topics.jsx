import React from "react";
import './Topics.css';
import { Link } from "react-router-dom";

function Topics() {
    return (
        <section id="dom" className="topics-container">
            <h2 className="topic-title">Available Domains</h2>
            <div className="bbutton-container">
                <div className="line1">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="icons8-code-52.png" alt="Coding" />
                                <p>Coding</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="tdtitle">+50 Course</p>
                                <Link to="/Coding"><p>Learn more</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="icons8-doctors-bag-96 (1).png" alt="Medecine" />
                                <p>Medecine</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="tdtitle">+50 Course</p>
                                <p>Learn more</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="icons8-finances-64.png" alt="Finance" />
                                <p>Finance</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="tdtitle">+50 Course</p>
                                <p>Learn more</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="icons8-react-native-50.png" alt="Physics" />
                                <p>Physics</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="tdtitle">+50 Course</p>
                                <p>Learn more</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line1">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="icons8-internet-64.png" alt="Informatique" />
                                <p>Informatique</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="tdtitle">+50 Course</p>
                                <Link to="/Suite"><p>Learn more</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="icons8-graphic-design-50.png" alt="Typographie" />
                                <p>Typographie</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="tdtitle">+50 Course</p>
                                <p>Learn more</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="icons8-marketing-64 (2).png" alt="Marketing" />
                                <p>Marketing</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="tdtitle">+50 Course</p>
                                <p>Learn more</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="icons8-language-100.png" alt="Langue" />
                                <p>Langue</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="tdtitle">+50 Course</p>
                                <p>Learn more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Topics;
