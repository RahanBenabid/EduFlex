import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "rahan@gmail.com",
    username: "nadime",
    password: "0000",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      console.log(result); // Add this line to log the result
      
      if (result.user._id) {
        navigate("/SignIn");
      } else {
        console.error("Sign up failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleSignInClick = () => {
    navigate("/SignIn");
  };

  return (
    <div className="main">
      <div className="box">
        <div className="inner-box">
          <div className="carousel">
            <img src="Capture.PNG" alt="" />
          </div>
          <div className="from-wrap">
            <form onSubmit={handleSubmit} autoComplete="off" className="sign-in-form">
              <div className="logo">
                <img src="Captureic.PNG" alt="" />
              </div>

              <div className="actual-form lili">
                <div className="input-wrap">
                  <input
                    type="email"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                  />
                  <label className="l">Email</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={formData.username}
                    onChange={handleInputChange}
                    name="username"
                  />
                  <label className="l">Username</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
                  />
                  <label>Password</label>
                </div>
              </div>

            <button className="sign-btn lili" type="submit">
                Sign Up
              </button>

              <div>
                <span className="ttext">
                  Have an account?
                  <Link to="/SignIn" onClick={handleSignInClick}>
                    <span>Sign In</span>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

