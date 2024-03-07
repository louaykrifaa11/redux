import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions/todoActions.js';

const EditTask = ({ task }) => {

  const dispatch = useDispatch();
  
  const [updatedName, setUpdatedName] = useState(task.name);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = { ...task, name: updatedName, email: updatedDescription };
    dispatch(editTask(task.id, updatedTask));
  }; 

  return (
    
    <form onSubmit={handleSubmit}>

      <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
      <input type="text" value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} />
      <button type="submit">Edit</button>

    </form>
  );
};

export default EditTask;