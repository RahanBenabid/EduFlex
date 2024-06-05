import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Upload.module.css';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('something in albanian');
  const [description, setDescription] = useState('i love cookies, not really lol');
  const navigate = useNavigate();

  const userObject = JSON.parse(localStorage.getItem('user'));
  const userId = userObject?._id;

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('userId', userId);
      formData.append('title', title);
      formData.append('description', description);
  
      const response = await axios.post('http://localhost:3000/course/userCourses', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('File uploaded successfully:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/Dashboard" className={styles.dashboardLink}>
          Dashboard
        </Link>
      </div>
      <h2 className={styles.heading}>Upload File</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          className={styles.input}
        />
        <input type="file" onChange={handleFileChange} className={styles.fileInput} />
      </div>
      <button onClick={handleUpload} className={styles.uploadButton}>
        Upload File
      </button>
    </div>
  );
};

export default FileUpload;