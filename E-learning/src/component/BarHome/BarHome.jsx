import React from "react";
import'./BarHome.css'


function BarHome(){
return(
<section className="bar-container">
  
   <div className="icon-set">
    <img src="/au.png" alt="" />
    <div className="barTitle">
    <p> Audio & Video</p>
        <div className="barText">
        <p>Virtual learning know as a<br/> computer or platform</p>
        </div>
    </div>
   
    
    
    <img src="room.png" alt="" />

    <div className="barTitle">
    <p> Virtual Classroom</p>
        <div className="barText">
        <p>Virtual learning know as a<br/> computer or platform</p>
        </div>
    </div>
    
    
    <img src="grou.png" alt="" />
    <div className="barTitle">
    <p>Group Learning</p>
        <div className="barText">
        <p>Virtual learning know as a<br/> computer or platform</p>
        </div>
    </div>
   </div>
</section>);

}
export default BarHome;
