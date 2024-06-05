import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './Profile.css';

const Profile = () => {
    const [email, setEmail] = useState('email@example.com');
    const [age, setAge] = useState(30);
    const [city, setCity] = useState('Ville');
    const [menuVisible, setMenuVisible] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    }, [token]);

    return (
        <div className="profile-container">
            <div className="background-photo"></div>
            <div className="profile-header">
                <img className='profile-picture' />
                <FontAwesomeIcon icon={faEdit} className="profile-icon" onClick={() => setMenuVisible(!menuVisible)} />
                {user && <h2>{user.username}</h2>}
            </div>
            {menuVisible && user && (
                <div className="profile-menu">
                    <div className="info-container">
                        <p><span className="info-label">Email:</span> {email}</p>
                        <FontAwesomeIcon icon={faEdit} onClick={() => setEmail(prompt('Nouvel email :'))} className="edit-icon" />
                    </div>
                    <div className="ligne"></div>
                    <div className="info-container">
                        <p><span className="info-label">Âge:</span> {age} ans</p>
                        <FontAwesomeIcon icon={faEdit} onClick={() => setAge(parseInt(prompt('Nouvel âge :')))} className="edit-icon" />
                    </div>
                    <div className="ligne"></div>
                    <div className="info-container">
                        <p><span className="info-label">Ville:</span> {city}</p>
                        <FontAwesomeIcon icon={faEdit} onClick={() => setCity(prompt('Nouvelle ville :'))} className="edit-icon" />
                    </div>
                </div>
            )}
        
        </div>
        
    );
}

export default Profile;