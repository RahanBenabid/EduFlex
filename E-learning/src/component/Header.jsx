import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <header className="header">
      <Link to="/">
        <img src="logo2.jpg" alt="Logo" />
      </Link>
      <nav className="all">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <a href="#domain" onClick={(e) => e.preventDefault()}>
            Domain
          </a>
          <a href="#course" onClick={(e) => e.preventDefault()}>
            Course
          </a>
          <a href="#motiv" onClick={(e) => e.preventDefault()}>
            About Us
          </a>
          <a href="#faqq" onClick={(e) => e.preventDefault()}>
            FAQ
          </a>

          {isLoggedIn ? (
            <div className="dropdown">
              <img
                src="Heather Mason.jpg"
                alt="Profile"
                onClick={toggleDropdown}
                className="dropbtn"
              />
              {dropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/Dashboard">
                    <img src="icons8-utilisateur-48.png" alt="Edit Profile" />
                    Profile
                  </Link>
                  <hr />
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src="par.png" alt="Settings" /> Setting & Privacy
                  </a>
                  <hr />
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src="icons8-aide-50.png" alt="Help" /> Help & Support
                  </a>
                  <hr />
                  <a onClick={handleLogout}>
                    <img src="dc.png" alt="Logout" /> Logout
                  </a>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/SignUp">
                <button className="bheader">Sign up</button>
              </Link>
              <Link to="/SignIn">
                <button className="button bheader1">Login</button>
              </Link>
            </>
          )}
        </nav>
      </nav>
    </header>
  );
}

export default Header;