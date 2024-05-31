import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";

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
        navigate("/SignIn");
    };

    return (
        <header className="header">
            <img src="logo2.jpg" alt="Logo" />
            <nav className="all">
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <a href="#dom">Domain</a>
                    <a href="#course">Course</a>
                    <a href="#motiv">About Us</a>
                    <a href="#faqq">FAQ</a>

                    {isLoggedIn ? (
                        <div className="dropdown">
                            <img src="p.jpg" alt="Profile" onClick={toggleDropdown} className="dropbtn" />
                            {dropdownOpen && (
                                <div className="dropdown-content">
                                    <Link to="/Dashboard">
                                        <img src="icons8-utilisateur-48.png" alt="Edit Profile" />
                                        Profile
                                    </Link>
                                    <hr />
                                    <a href="#">
                                        <img src="icons8-paramètres-50.png" alt="Settings" /> Setting & Privacy
                                    </a>
                                    <hr />
                                    <a href="#">
                                        <img src="icons8-aide-50.png" alt="Help" /> Help & Support
                                    </a>
                                    <hr />
                                    <button onClick={handleLogout} >
                                        <img src="icons8-déconnexion-arrondi-50.png" alt="Logout" />
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/SignIn">
                                <button className="button bheader1">Login</button>
                            </Link>
                            <Link to="/SignUp">
                                <button className="bheader">Sign up</button>
                            </Link>
                        </>
                    )}
                </nav>
            </nav>
        </header>
    );
}

export default Header;
