import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from '../Header'
import Home from '../Home/Home'
import Motivation from '../Motivation/Motivation'
import Topics from '../Topis/Topics';
import Bar from "../Bar/Bar";
import Testimation from "../Testimation/Testimation";
import Footer from "../Footer/Footer";
import Course from "../Course/Course"
import BarHome from "../BarHome/BarHome"
import FAQ from "../FAQ/FAQ";
import Choose from "../Choose/Choose";
import Quiz from "../Quiz/Quiz";






function MainHome() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const token = localStorage.getItem("token");
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/user", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const result = await response.json();
                setUser(result);
            } catch (error) {
                console.error(error);
            }
        };
        if (token) fetchUser();
        // else navigate("/SignIn");
    }, [navigate, token]);
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/SignIn");
    };
    return (
        <>
        
        <Header></Header>
        <Home></Home>
        <BarHome></BarHome>
        <Motivation></Motivation>
        <Bar></Bar>
        <Topics></Topics>
        <Course></Course>
        <Testimation></Testimation>
        <FAQ></FAQ>
        <Choose></Choose>
        <Footer></Footer>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
        <button
        onClick={handleLogout}
        style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
        }}
        >
        Logout
        </button>
        {user && (
            <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '8px', marginTop: '1rem' }}>
            <h2 style={{ color: '#333', marginBottom: '1rem' }}>User Details</h2>
            <p style={{ marginBottom: '0.5rem' }}>
            <strong>ID:</strong> {user._id}
            </p>
            
            <p style={{ marginBottom: '0.5rem' }}>
            <strong>Last Name:</strong> {user.username}
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
            <strong>Email:</strong> {user.email}
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
            <strong>Role:</strong> {user.role}
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
            <strong>Password:</strong> {user.password}
            </p>
            </div>
        )}
        </div>
        </>

    )
    
}
export default MainHome;