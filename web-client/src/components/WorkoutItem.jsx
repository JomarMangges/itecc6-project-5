import React from 'react';
import api from '../api';
import { FaDumbbell, FaTrash, FaEdit } from 'react-icons/fa';

const WorkoutItem = ({ workout, onEdit, refreshList }) => {
  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this workout?')) return;
    try {
      await api.delete(`/workouts/${workout._id}`);
      refreshList();
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };

  return (
    <div className="card">
      <h3><FaDumbbell /> {workout.exercise}</h3>
      <p><strong>Reps:</strong> {workout.reps} | <strong>Sets:</strong> {workout.sets}</p>
      {workout.weight && <p><strong>Weight:</strong> {workout.weight} kg</p>}
      <p><strong>Date:</strong> {new Date(workout.date).toLocaleDateString()}</p>
      {workout.notes && <p><em>{workout.notes}</em></p>}

      <button onClick={() => onEdit(workout)} style={{ marginRight: '8px' }}>
        <FaEdit /> Edit
      </button>
      <button onClick={handleDelete} style={{ background: '#B22222', color: 'white' }}>
        <FaTrash /> Delete
      </button>
    </div>
  );
};

export default WorkoutItem;
