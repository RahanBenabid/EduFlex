import React from "react";
import Header from "../Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./Suite.css"

function Suite() {
    return (
        <>
            <div className="h"><Header /></div>
            <section className="Coding">

                <div className="Code-wrapper cw">
                    <a>Network</a>
                    <a>Cyber Cecuity</a>
                    <a>artificial intelligence</a>
                    <a>Web Development</a>

                </div>
                <div className="cherche">
                    <h1>
                        Hello,What Do You Want To Learn?
                    </h1>
                    <input type="text" placeholder="Search here" /><button>Search</button>

                </div>
                <div className="text"> <p>Network</p><p>Cyber Cecuity</p><p>Web Development</p></div>


                <h1 className="mo">Network</h1>
                <div className="coding-card cow">

                    <div className="course-card">
                        <img src="ss.png" />

                        <div className="category">
                            <div className="subject">
                                <div className="code">
                                    <h3>Informatique</h3>
                                    <h3>Network</h3>

                                </div>

                            </div>
                            <h2>Learn more about  Network -<br />complete beginner course</h2>
                            <div className="course-desc">
                                <p>Beginner</p>

                            </div>
                            <Link to="/Reseau1"><button className="button bou">Explore Now</button></Link>
                        </div>
                    </div>
                    <div className="course-card">
                        <img src="sss.png" />

                        <div className="category">
                            <div className="subject">
                                <div className="code">
                                    <h3>Informatique</h3>
                                    <h3>Network</h3>
                                </div>

                            </div>
                            <h2>IT Networking Fundamentals <br />complete beginner course</h2>
                            <div className="course-desc">
                                <p>Beginner/Advanced</p>
                                <Link to="/Reseau2"><button className="button bou">Explore Now</button></Link>
                            </div>

                        </div>
                    </div>
                    <div className="course-card">
                        <img src="ssss.png" />

                        <div className="category">
                            <div className="subject">
                                <div className="code">
                                    <h3>Informatique</h3>
                                    <h3>Network</h3>
                                </div>

                            </div>
                            <h2>Fundamentals of Network Engineering -<br />complete Advanced course</h2>
                            <div className="course-desc">
                                <p>Advanced</p>
                                <Link to="/Reseau3"><button className="button bou">Explore Now</button></Link>
                            </div>

                        </div>
                    </div>


                    <div className="course-card">
                        <img src="cs.png" />

                        <div className="category">
                            <div className="subject">
                                <div className="code">
                                    <h3>Informatique</h3>
                                    <h3>Cyber Security</h3>
                                </div>

                            </div>
                            <h2>Cyber Security: From Beginner to Expert <br />complete beginner course</h2>
                            <div className="course-desc">
                                <p>Beginner</p>
                                <Link to="/Cs1"><button className="button bou">Explore Now</button></Link>
                            </div>

                        </div>
                    </div>

                    <div className="course-card">
                        <img src="css.png" />

                        <div className="category">
                            <div className="subject">
                                <div className="code">
                                    <h3>Informatique</h3>
                                    <h3>Cyber Security</h3>
                                </div>

                            </div>
                            <h2>The Complete Cyber Security Course:<br /> Hackers Exposed!  </h2>
                            <div className="course-desc">
                                <p>Beginner</p>
                                <Link to="/Cs2"><button className="button bou">Explore Now</button></Link>
                            </div>

                        </div>
                    </div>
                    <div className="course-card">
                        <img src="csss.png" />

                        <div className="category">
                            <div className="subject">
                                <div className="code">
                                    <h3>Informatique</h3>
                                    <h3>Cyber Security</h3>
                                </div>

                            </div>
                            <h2>The Complete Cyber Security Course : <br />Network Security!</h2>
                            <div className="course-desc">
                                <p>Beginner</p>
                                <Link to="/Cs3"><button className="button bou">Explore Now</button></Link>
                            </div>

                        </div>
                    </div>



                    <div className="course-card">
                        <img src="ai.png" />

                        <div className="category">
                            <div className="subject">
                                <div className="code">
                                    <h3>Informatique</h3>
                                    <h3>Artificial Intelligence</h3>
                                </div>

                            </div>
                            <h2>The Completed Data Science Course <br />complete course</h2>
                            <div className="course-desc">
                                <p>Advanced/Expert</p>
                                <Link to="/Ai1"><button className="button bou">Explore Now</button></Link>
                            </div>

                        </div>
                    </div>

                    <div className="course-card">
                        <img src="aii.png" />

                        <div className="category">
                            <div className="subject">
                                <div className="code">
                                    <h3>Informatique</h3>
                                    <h3>Artificial Intelligence </h3>
                                </div>

                            </div>
                            <h2>Artificial Intelligence and ChatGPT-<br />complete beginner course</h2>
                            <div className="course-desc">
                                <p>Beginner</p>
                                <Link to="/Ai2"><button className="button bou">Explore Now</button></Link>

                            </div>

                        </div>
                    </div>

                    <div className="course-card">
                        <img src="aiii.png" />
                        <div className="category">
                            <div className="subject">
                                <div className="code">
                                    <h3>Informatique</h3>
                                    <h3>Artificial Intelligence </h3>
                                </div>


                            </div>
                            <h2>Artificial Intelligence A-Z 2024: <br /> Build 7 AI + LLM & ChatGPT</h2>
                            <div className="course-desc">
                                <p>Beginner</p>
                                <Link to="/Ai3"><button className="button bou">Explore Now</button></Link>

                            </div>

                        </div>
                    </div>
                </div>


                <h1 className="mo">Web Development</h1>
                <div className="course-card">
                    <img src="ht.png" />

                    <div className="category">
                        <div className="subject">
                            <div className="code">
                                <h3>Informatique</h3>
                                <h3>Web Development</h3>
                            </div>

                        </div>
                        <h2>The Complete 2024 Web Development Bootcamp<br />complete course</h2>
                        <div className="course-desc">
                            <img src="" alt="" /><p>Advanced/Expert</p>
                            <Link to="/PHPnext"><button  className="bou button">Explore Now</button></Link>
                        </div>

                    </div>
                </div>

                <div className="course-card">
                    <img src="htt.jpg" />

                    <div className="category">
                        <div className="subject">
                            <div className="code">
                                <h3>Informatique</h3>
                                <h3>Web Development </h3>
                            </div>

                        </div>
                        <h2>The Web Developer Bootcamp 2024 -<br />complete beginner course</h2>
                        <div className="course-desc">
                            <img src="" alt="" /><p>Beginner</p>
                            <button  className="bou button">Explore Now</button>

                        </div>

                    </div>
                </div>

                <div className="course-card">
                    <img src="httt.png" />
                    <div className="category">
                        <div className="subject">
                            <div className="code">
                                <h3>Informatique</h3>
                                <h3>Web Development </h3>
                            </div>


                        </div>
                        <h2>Complete Figma Megacourse: <br />UI/UX Design Beginner to Expert</h2>
                        <div className="course-desc">
                            <img src="" alt="" /><p>Beginner</p>
                            <button className="bou button">Explore Now</button>

                        </div>

                    </div>
                </div>


                <Footer></Footer>
            </section>
        </>
    )
}
export default Suite;