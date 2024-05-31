import React, { useState } from 'react';
import './Marker.css';

const Marker = ({ title, description }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompletion = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`course-module ${completed ? 'completed' : ''}`}>
      <div className="module-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button onClick={toggleCompletion} className="completion-btn">
        {completed ? 'Marquer comme non complété' : 'Marquer comme complété'}
      </button>
    </div>
  );
};

export default Marker;