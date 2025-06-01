import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

function ProgressChart({ workouts }) {
  const chartData = workouts.length
    ? workouts.map(w => ({
        date: w.date?.substring(0, 10),
        weight: w.weight || 0,
        reps: w.reps,
        sets: w.sets,
      }))
    : [];

  return (
    <div className="progress-chart" style={{ marginTop: '2rem' }}>
      <h2 style={{ color: '#fff' }}>Progress Chart</h2>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="reps" stroke="#82ca9d" />
            <Line type="monotone" dataKey="sets" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p style={{ color: '#ccc' }}>No workout data to display.</p>
      )}
    </div>
  );
}

export default ProgressChart;
