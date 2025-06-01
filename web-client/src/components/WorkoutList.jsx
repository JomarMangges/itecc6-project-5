import React, { useState, useEffect } from 'react';
import WorkoutItem from './WorkoutItem';
import api from '../api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

function WorkoutList({ workouts, fetchWorkouts, onEdit }) { 
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(workouts);
  }, [workouts]);

  const handleFilter = async () => {
    if (!startDate && !endDate) {
      alert('Please select at least one date.');
      return;
    }

    try {
      const response = await api.get('/workouts/filter/date', {
        params: {
          ...(startDate && { start: startDate }),
          ...(endDate && { end: endDate }),
        },
      });
      setFiltered(response.data);
    } catch (error) {
      console.error('Error filtering workouts:', error);
    }
  };

  const handleClear = () => {
    setStartDate('');
    setEndDate('');
    setFiltered(workouts);
  };

  const exportToPDF = () => {
    if (!filtered || filtered.length === 0) {
      alert('No workouts to export.');
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Workout Log', 14, 22);

    const tableColumn = ['Date', 'Exercise', 'Sets', 'Reps', 'Weight (kg)', 'Notes'];
    const tableRows = filtered.map(w => [
      w.date?.substring(0, 10) || '',
      w.exercise || '',
      w.sets || '',
      w.reps || '',
      w.weight || '',
      w.notes || ''
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      styles: {
        fontSize: 10,
        cellPadding: 3,
        overflow: 'linebreak',
      },
      headStyles: {
        fillColor: [22, 160, 133],
      },
      margin: { top: 30 },
    });

    doc.save('workout_log.pdf');
  };

  return (
    <div className="workout-list">
      <div className="filter-controls">
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={exportToPDF}>Export PDF</button>
      </div>
      {filtered.length > 0 ? (
        filtered.map(workout => (
          <WorkoutItem
            key={workout._id}
            workout={workout}
            refreshList={fetchWorkouts}
            onEdit={onEdit} 
          />
        ))
      ) : (
        <p>No workouts found.</p>
      )}
    </div>
  );
}

export default WorkoutList;
