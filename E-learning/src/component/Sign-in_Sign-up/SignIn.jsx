import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignIn.css";

function SignIn() {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      email: "nadime@gmail.com",
      password: "0000",
   });

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         const result = await response.json();
         console.log("Full response:", result); 
         console.log(result); // Add this line to log the result
         if (result.user._id) {
            navigate("/");
            const user = JSON.stringify(result.user);
            localStorage.setItem("user", user);
            localStorage.setItem("token", result.token);
         } else {
            console.log(result); // Add this line to log the result
            console.error("Sign up failed");
         }
      } catch (error) {
         console.error(error);
      }
   };

   const handleSignUpClick = () => {
      navigate("/SignUp");
   };

   //----------------------------------------------------------------------------
   const inputs = document.querySelectorAll(".input-field");

   inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
         inp.classList.add("active");
      });

      inp.addEventListener("blur", () => {
         if (inp.value !== "") return;
         inp.classList.remove("active");
      });
   });
   //----------------------------------------------------------------------------

   return (
      <div className="main">
         <div className="box">
            <div className="inner-box">
               <div className="from-wrap">
               <form
               action=""
               autoComplete="off"
               className="sign-in-form"
               onSubmit={handleSubmit} // Add the onSubmit event handler
               >
                     <div className="logo">
                        <img src="Captureic.PNG" alt="" />
                     </div>

                     <div className="actual-form">
                        <div className="input-wrap">
                           <input
                              type="text"
                              minLength="4"
                              className="input-field"
                              autoComplete="off"
                              required
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                           />
                           <label className="l">Email</label>
                        </div>

                        <div className="input-wrap">
                           <input
                              type="password"
                              minLength="4"
                              className="input-field"
                              autoComplete="off"
                              required
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                           />
                           <label>Password</label>
                        </div>

                        <p className="spliter">-Or-</p>

                        <div className="social-container">
                           <div className="social">
                              <img src="icons8-google-48.png" alt="" />
                           </div>
                           <div className="social">
                              <img src="icons8-facebook-48.png" alt="" />
                           </div>
                        </div>
                     </div>

                     <button className="sign-btn" type="submit">
                        Sign in
                     </button>

                     <div>
                        <span className="ttext">
                           New Here?
                           <Link to="/SignUp" onClick={handleSignUpClick}>
                              <span>Creat an Account</span>
                           </Link>
                        </span>
                     </div>

                     <span id="pass">Forget Passworld?</span>
                  </form>
               </div>

               <div className="carousel">
                  <img src="Capture.PNG" alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default SignIn;