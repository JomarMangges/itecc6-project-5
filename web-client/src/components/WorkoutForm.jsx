import React, { useState, useEffect } from 'react';

const WorkoutForm = ({ onSubmit, workoutToEdit, onCancel }) => {
  const [formData, setFormData] = useState({
    exercise: '',
    reps: '',
    sets: '',
    weight: '',
    date: '',
    notes: ''
  });

  useEffect(() => {
    if (workoutToEdit) {
      setFormData({
        ...workoutToEdit,
        date: workoutToEdit.date?.slice(0, 10) || '',
      });
    }
  }, [workoutToEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.exercise || !formData.reps || !formData.sets) {
      alert('Exercise, reps, and sets are required');
      return;
    }
    onSubmit(formData);
    setFormData({
      exercise: '',
      reps: '',
      sets: '',
      weight: '',
      date: '',
      notes: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>{workoutToEdit ? 'Edit Workout' : 'Log New Workout'}</h2>

      <label>Exercise *</label>
      <input
        type="text"
        name="exercise"
        value={formData.exercise}
        onChange={handleChange}
        required
      />

      <label>Reps *</label>
      <input
        type="number"
        name="reps"
        value={formData.reps}
        onChange={handleChange}
        required
      />

      <label>Sets *</label>
      <input
        type="number"
        name="sets"
        value={formData.sets}
        onChange={handleChange}
        required
      />

      <label>Weight (kg)</label>
      <input
        type="number"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
      />

      <label>Date</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <label>Notes</label>
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
      ></textarea>

      <button type="submit" className="btn-primary">
        {workoutToEdit ? 'Update Workout' : 'Add Workout'}
      </button>
      {workoutToEdit && (
        <button type="button" onClick={onCancel} className="btn-secondary">
          Cancel
        </button>
      )}
    </form>
  );
};

export default WorkoutForm;
