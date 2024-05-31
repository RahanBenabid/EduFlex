import React from "react";
import "./Dashboard.css"
import Todo from "../Todo/Todo";
import Progress from "../Progress/Progress"
import Ajouter from "../Ajouter/Ajouter";
import Profile from "../Profile/Profile";

function Dashboard() {
    return (<>
        <div className="boardcontainer">
            <div className="boardtitre">
                {/* <h1>Profile settings</h1> */}
                <Profile></Profile>
            </div>
            <div className="profile-carde-container">
                <div className="profile-card">
                    <div className="ph">
                        <img src="icons8-flame-100.png" alt="r" />
                        <h1>Streak  <span>+3</span></h1>
                    </div>
                    <p>You have been signing in for 3 days!!</p>

                </div>
                <div className="profile-card">
                    <div className="ph">
                        <img src="icons8-goal-100.png" alt="r" />
                        <h1>Chalenges <span>+5</span></h1>
                    </div>
                    <p>Diffrent chalenges and quizes are waitinf for you!</p>

                </div>
                <div className="profile-card">
                    <div className="ph">
                        <img src="icons8-trophy-100.png" alt="r" />
                        <h1>Trophy <span>+7</span></h1>
                    </div>
                    <p>Earn a Trophy by completing a Lesson </p>

                </div>
            </div>
            <div className="editeprofile">
                <div className="boardleft">
                    <Todo></Todo>
                </div>
                <div className="boardright">
                    <Progress />
                </div>

            </div>
            
            <Ajouter></Ajouter>
        </div>
    </>);
}

export default Dashboard