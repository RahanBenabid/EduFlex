import React from "react";
import "./Home.css"
import { motion } from "framer-motion"

function Home() {
    return (

        <section className="home-wrapprer">
            <div className="home-container">
                <div className="home-left">
                    <div className="home-title">
                        <motion.h1
                            initial={{ x: "-2rem", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, type: "spring" }}>
                            Find The Best Online <br />
                            Course <span>& Learn</span></motion.h1>
                    </div>

                    <div className="secondary-text">
                        <p>This website is designed to guide beginners
                            and help<br /> advanced learners perfect their talents                 even further. <br />
                            come and join our community.</p>
                    </div>
                    <div className="oinput-container">
                    <button className="button bbhome" href="">Explore now</button>
                        <input type="text" name="text" className="search" placeholder="Search Course..." />
                        <img src="icons8-search-50.png" className="s-icon" />
                    </div>

                </div>
                <div className="flexCenter home-right">
                    <img src="copie2.png" className="flexColEnd" />


                </div>

            </div>

        </section>


    );

}
export default Home;