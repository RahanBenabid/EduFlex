import React from "react";
import'./Bar.css'
import CountUp from "react-countup";

function Bar(){
return(
<section className="bbar-container">
    <div className="bicon-set">
   <img src="icons8-course-100.png"/>
   <p>Online Courses<br/><span> <CountUp start={80} end={90} duration={4} />+</span></p>
   <img src="icons8-users-96.png"/>
   <p>Concurrent Learners<br/><span> <CountUp start={390} end={400} duration={4} />+</span> </p>
   <img src="icons8-teacher-100.png"  />
   <p>Our Teachers <br/><span> <CountUp start={45} end={55} duration={4} />+</span></p>
   <img src="icons8-certified-100.png" alt="" />
   <p>Certificate given <br/><span> <CountUp start={767} end={777} duration={4} />+</span></p>


   </div>
</section>);

}
export default Bar;
