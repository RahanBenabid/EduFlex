import React, { useState } from 'react';
import './Ajouter.css';


const Ajouter = () => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ title: '', description: '', file: null });

    const handleInputChange = (e) => {
        if (e.target.name === 'file') {
            setNewCourse({ ...newCourse, [e.target.name]: e.target.files[0] });
        } else {
            setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
        }
    };

    const handleAddCourse = () => {
        setCourses([...courses, newCourse]);
        setNewCourse({ title: '', description: '', file: null });
    };

    const handleUpdateCourse = (index) => {
        const courseToUpdate = courses[index];
        const updatedCourse = prompt('Entrer le nouveau nom du cours', courseToUpdate.name);
        if (updatedCourse !== null) {
            const newCourses = [...courses];
            newCourses[index] = new File([courseToUpdate.file], updatedCourse, { type: courseToUpdate.type });
            setCourses(newCourses);
        }
    };

    const handleDeleteCourse = (index) => {
        const newCourses = [...courses];
        newCourses.splice(index, 1);
        setCourses(newCourses);
    };

    return (
        <>
            
            <div className="course-management">
            <h2 id="ajou">Gestion des cours</h2>
                <div className="course-form">
                    <input
                        type="text"
                        name="title"
                        placeholder="Titre du cours"
                        value={newCourse.title}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Description du cours"
                        value={newCourse.description}
                        onChange={handleInputChange}
                    />
                    
                    <input
                   
                        type="file"
                        name="file"
                        accept=".pdf"
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddCourse} id="b">Ajouter un cours</button>
                </div>
                <div className="courses-list">
                    {courses.map((course, index) => (
                        <div key={index} className="acourse-card">
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            {course.file && (
                                <a href={URL.createObjectURL(course.file)} target="_blank" rel="noopener noreferrer">
                                    Télécharger le cours
                                </a>
                            )}
                            <div className="actions">
                                <button onClick={() => handleUpdateCourse(index, { title: 'Cours mis à jour', description: 'Description mise à jour', file: null })}>
                                    Modifier
                                </button>
                                <button onClick={() => handleDeleteCourse(index)}>Supprimer</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Ajouter;

