// components/DetailsView.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailsView = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    const response = await axios.get(`/api/tasks/${id}`);
    setTask(response.data);
  };

  return (
    <div>
      <h1>Task Details</h1>
      {task && (
        <div>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      )}
    </div>
  );
};

export default DetailsView;
