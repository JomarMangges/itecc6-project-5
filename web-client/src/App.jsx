import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import WorkoutList from './components/WorkoutList';
import WorkoutForm from './components/WorkoutForm';
import ProgressChart from './components/ProgressChart';
import api from './api';
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [editWorkout, setEditWorkout] = useState(null);

  const fetchWorkouts = async () => {
    try {
      const response = await api.get('/workouts');
      setWorkouts(response.data);
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const handleAddOrUpdateWorkout = async (workoutData) => {
    try {
      if (editWorkout) {
        await api.put(`/workouts/${editWorkout._id}`, workoutData);
        setEditWorkout(null);
      } else {
        await api.post('/workouts', workoutData);
      }
      await fetchWorkouts();
    } catch (error) {
      console.error('Error saving workout:', error);
      alert('Failed to save workout');
    }
  };

  const handleDeleteWorkout = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this workout?');
    if (!confirmDelete) return;

    try {
      await api.delete(`/workouts/${id}`);
      await fetchWorkouts();
    } catch (error) {
      console.error('Error deleting workout:', error);
      alert('Failed to delete workout');
    }
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <WorkoutForm
                  onSubmit={handleAddOrUpdateWorkout}
                  workoutToEdit={editWorkout}
                  onCancel={() => setEditWorkout(null)}
                />
                <WorkoutList
                  workouts={workouts}
                  fetchWorkouts={fetchWorkouts}
                  onEdit={setEditWorkout}
                  onDelete={handleDeleteWorkout}
                />
              </>
            }
          />
          <Route
            path="/progress"
            element={<ProgressChart workouts={workouts} />}
          />
          <Route
            path="/export"
            element={
              <WorkoutList
                workouts={workouts}
                fetchWorkouts={fetchWorkouts}
                onEdit={setEditWorkout}
                onDelete={handleDeleteWorkout}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
