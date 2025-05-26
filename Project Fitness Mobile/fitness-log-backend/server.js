const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'fitness'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

app.get('/workouts', (req, res) => {
  db.query('SELECT * FROM workouts', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/workouts', (req, res) => {
  const { exercise, sets, reps, weight, workout_date, notes } = req.body;
  db.query('INSERT INTO workouts SET ?', { exercise, sets, reps, weight, workout_date, notes }, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Workout added', id: result.insertId });
  });
});

app.put('/workouts/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  db.query('UPDATE workouts SET ? WHERE id = ?', [updatedData, id], (err) => {
    if (err) throw err;
    res.json({ message: 'Workout updated' });
  });
});

app.delete('/workouts/:id', (req, res) => {
  db.query('DELETE FROM workouts WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: 'Workout deleted' });
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
