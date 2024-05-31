import React from "react"
import "./footer.css"

function Footer() {
    return (
   
        <section className="footer">
       
            <img src="logo.png"className="logo2" alt="" />
        <div className="container">
        <div>
            <h3>Online Platform</h3>
            <span> About Us  </span>
            <span> Courses</span>
            <span>Events </span>
            <span> Company</span>
          </div>
            <div>
                <h3 id="c">Subscribe Us to get in touch and enjoy discounts</h3>
                <div className="b">
                <input type="email" placeholder="Your Email" />
                    <button className="subscribe">Subscribe</button>
                </div>
                    
    
                <div className="ico">
                <span className="svg">
                    {" "}
                    <a href="https://www.twitter.com">
                    <p> <img src="icons8-twitter-30.png" ></img> </p></a>
                </span>
                <span className="svg">
                    {" "}
                    <a href="https://www.instagram.com">
                    <p> <img src="instagram-line.png"/> </p></a>
                </span>
                <span className="svg">
                    {" "}
                    <a href="https://www.whatsapp.com">
                    <p> <img src="whatsapp-line.png"/> </p></a>
                </span>
                <span className="svg">
                    {" "}
                    <a href="https://www.linkedin.com">
                    <p> <img src="linkedin-fill.png"/> </p></a>
                </span>
                </div>
               
                    
                    
                    
                
            </div>
          <div>
            <h3>Contact Us</h3>
            <span> ceative networks tohana</span>
            <span> + (213) 569854712</span>
            <span> eduflex@gmail.com</span>
            <span> www.eduflex.com </span>
          </div>
        </div>
        
    </section>

        
       
)

}
export default Footer;