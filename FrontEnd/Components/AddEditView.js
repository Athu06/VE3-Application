// components/AddEditView.js
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const AddEditView = () => {
  const { id } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      fetchTask();
    }
  }, []);

  const fetchTask = async () => {
    const response = await axios.get(`/api/tasks/${id}`);
    const task = response.data;
    setTitle(task.title);
    setDescription(task.description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description };
    if (id) {
      await axios.put(`/api/tasks/${id}`, taskData);
    } else {
      await axios.post('/api/tasks', taskData);
    }
    history.push('/');
  };

  return (
    <div>
      <h1>{id ? 'Edit Task' : 'Add Task'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default AddEditView;
