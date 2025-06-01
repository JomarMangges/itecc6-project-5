import React, { useEffect, useState } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList';
import ProgressChart from '../components/ProgressChart';
import api from '../api';

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    const res = await api.get('/workouts');
    setWorkouts(res.data);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Workout Tracker</h1>
      <WorkoutForm refresh={fetchWorkouts} />
      <WorkoutList workouts={workouts} refresh={fetchWorkouts} />
      <ProgressChart workouts={workouts} />
    </div>
  );
};

export default Home;
